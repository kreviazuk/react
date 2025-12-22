import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import { getErrorMessage } from '@/utils/form'

export const Route = createFileRoute('/react-edit-profile')({
  component: EditProfilePage,
})

// --- 1. 模拟 API 数据层 ---

interface UserProfile {
  id: string
  nickname: string
  website: string
  status: 'active' | 'away' | 'busy'
}

// 模拟获取数据
const fetchUserProfile = async (): Promise<UserProfile> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    id: 'user-123',
    nickname: '代码冒险者',
    website: 'https://tanstack.com',
    status: 'active',
  }
}

// 模拟更新数据
const updateUserProfile = async (data: UserProfile) => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  console.log('API Received:', data)
  return data
}

// --- 2. 校验 Schema ---

const profileSchema = z.object({
  nickname: z.string().min(2, '昵称太短了').max(20, '昵称太长了'),
  website: z.string().url('请输入有效的网址'),
  status: z.enum(['active', 'away', 'busy']),
})

// --- 3. 页面主组件 ---

function EditProfilePage() {
  const queryClient = useQueryClient()

  // 【Query 的作用】：负责把初始数据从“服务器”拿下来
  const { data: initialData, isLoading, isError } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
  })

  // 【Mutation 的作用】：负责把修改后的数据发回“服务器”
  const mutation = useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (newData) => {
      // 关键联动：更新成功后，告诉 Query 缓存里的旧数据失效了，或者直接用新数据覆盖它
      queryClient.setQueryData(['userProfile'], newData)
      alert('保存成功！数据已同步到 TanStack Query 缓存')
    },
  })

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
          <p className="text-gray-500 font-medium animate-pulse">正在从 Query 加载原始资料...</p>
        </div>
      </div>
    )
  }

  if (isError) return <div className="p-10 text-center text-red-500">加载失败</div>

  return (
    <div className="min-h-screen bg-slate-50 pb-20 px-4">
      <header className="max-w-md mx-auto pt-10 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">编辑个人资料</h1>
          <Link to="/" className="text-xs text-slate-400 hover:text-indigo-600 transition-colors">取消</Link>
        </div>
        <p className="text-slate-500 text-sm mt-1">此页面展示了 Query (读) 与 Form (写) 的完美配合</p>
      </header>

      <main className="max-w-md mx-auto">
        {/* 
           把拿到 initialData 传给内部组件
           这样内部组件初始化时其 defaultValues 就是真实数据了
        */}
        {initialData && (
          <ProfileEditor 
            initialData={initialData} 
            onSave={(val) => mutation.mutate(val)}
            isSaving={mutation.isPending}
          />
        )}
        
        {/* 底部小知识 */}
        <div className="mt-8 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
           <h4 className="text-xs font-bold text-indigo-900 mb-2 underline decoration-indigo-200 underline-offset-4">联动逻辑说明：</h4>
           <ul className="text-[11px] text-indigo-700 space-y-2 list-disc pl-4">
             <li><strong>Query (读)</strong>: 负责显示 Loading 状态并提供 <code>initialData</code>。</li>
             <li><strong>Form (填)</strong>: 负责本地的状态管理和 Zod 实时校验。</li>
             <li><strong>Mutation (写)</strong>: 点击保存后，Form 把数据交给 Mutation 发送请求。</li>
             <li><strong>反哺缓存</strong>: 成功后通过 <code>queryClient</code> 更新缓存，确保全应用数据一致。</li>
           </ul>
        </div>
      </main>
    </div>
  )
}

// --- 4. 内部表单组件 ---

function ProfileEditor({ 
  initialData, 
  onSave,
  isSaving 
}: { 
  initialData: UserProfile, 
  onSave: (val: UserProfile) => void,
  isSaving: boolean
}) {
  // 【Form 的作用】：负责管理用户打字的状态
  const form = useForm({
    defaultValues: {
      nickname: initialData.nickname,
      website: initialData.website,
      status: initialData.status,
    },
    validatorAdapter: zodValidator(),
    validators: {
      onChange: profileSchema,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: async ({ value }: { value: any }) => {
      onSave({ ...initialData, ...value })
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        form.handleSubmit()
      }}
      className="space-y-4"
    >
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-5">
        
        {/* 昵称字段 */}
        <form.Field name="nickname" children={(field) => (
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">用户昵称</label>
            <input
              value={field.state.value as string}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-medium text-slate-700"
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-[10px] text-red-500 ml-1">
                {field.state.meta.errors.map(getErrorMessage).join(', ')}
              </p>
            )}
          </div>
        )} />

        {/* 网址字段 */}
        <form.Field name="website" children={(field) => (
          <div className="space-y-2">
             <label className="text-xs font-bold text-slate-500 uppercase ml-1">个人官网</label>
             <input
              value={field.state.value as string}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="https://"
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-medium text-slate-700"
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-[10px] text-red-500 ml-1">
                {field.state.meta.errors.map(getErrorMessage).join(', ')}
              </p>
            )}
          </div>
        )} />

        {/* 状态字段 */}
        <form.Field name="status" children={(field) => (
          <div className="space-y-2">
             <label className="text-xs font-bold text-slate-500 uppercase ml-1">当前状态</label>
             <div className="flex gap-2">
                {(['active', 'away', 'busy'] as const).map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => field.handleChange(s)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                      field.state.value === s 
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                      : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
             </div>
          </div>
        )} />
      </div>

      {/* 提交按钮 */}
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isDirty]}
        children={([canSubmit, isDirty]) => (
          <button
            type="submit"
            disabled={!canSubmit || !isDirty || isSaving}
            className={`w-full py-4 rounded-3xl font-black text-sm uppercase tracking-widest transition-all shadow-lg active:scale-95 ${
              !canSubmit || !isDirty || isSaving
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-indigo-600 text-white shadow-indigo-200 hover:bg-indigo-700'
            }`}
          >
            {isSaving ? '正在同步数据...' : '保存更改'}
          </button>
        )}
      />
    </form>
  )
}
