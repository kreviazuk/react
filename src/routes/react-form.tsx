import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import { getErrorMessage } from '@/utils/form'

export const Route = createFileRoute('/react-form')({
  component: ReactFormPage,
})

const userSchema = z.object({
  fullName: z.string().min(2, '名字至少需要2个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  bio: z.string().min(10, '简介建议至少10个字符').max(100, '简介不能超过100个字符'),
  theme: z.enum(['light', 'dark', 'system']),
})


function ReactFormPage() {
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      bio: '',
      theme: 'system' as 'light' | 'dark' | 'system',
    },
    // 正确的 API 是在 useForm 的配置中使用 transform 来注入验证器逻辑，
    // 或者在不同的版本版本中是通过不同的方式，
    // 这里我们尝试使用最通用的字段级验证，如果顶层验证器有问题。
    // 经查证，@tanstack/react-form 的最新用法是在 useForm 选项中使用 validatorAdapter
    validatorAdapter: zodValidator(),
    validators: {
      onChange: userSchema,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSubmit: async ({ value }: { value: any }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(`提交成功!\n${JSON.stringify(value, null, 2)}`)
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-orange-50 pb-20 px-4">
      <header className="max-w-md mx-auto pt-8 pb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold tracking-wider text-indigo-600 uppercase">TanStack Form</p>
          <h1 className="text-2xl font-extrabold text-gray-900">个人资料设置</h1>
        </div>
        <Link to="/" className="p-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-400 hover:text-indigo-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
      </header>

      <main className="max-w-md mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="space-y-6"
        >
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl shadow-indigo-100/50 border border-white space-y-5">
            {/* Full Name Field */}
            <form.Field
              name="fullName"
              children={(field) => (
                <div className="space-y-1.5">
                  <label htmlFor={field.name} className="text-sm font-semibold text-gray-700 ml-1">
                    全名
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="输入你的姓名"
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 transition-all outline-none focus:ring-2 ${
                      field.state.meta.errors.length
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-gray-200 focus:border-indigo-400 focus:ring-indigo-100'
                    }`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-red-500 mt-1 ml-1">
                      {field.state.meta.errors.map(getErrorMessage).join(', ')}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Email Field */}
            <form.Field
              name="email"
              children={(field) => (
                <div className="space-y-1.5">
                  <label htmlFor={field.name} className="text-sm font-semibold text-gray-700 ml-1">
                    电子邮箱
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type="email"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="example@mail.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 transition-all outline-none focus:ring-2 ${
                      field.state.meta.errors.length
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-gray-200 focus:border-indigo-400 focus:ring-indigo-100'
                    }`}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-xs text-red-500 mt-1 ml-1">
                      {field.state.meta.errors.map(getErrorMessage).join(', ')}
                    </p>
                  )}
                </div>
              )}
            />

            {/* Bio Field */}
            <form.Field
              name="bio"
              children={(field) => (
                <div className="space-y-1.5">
                  <label htmlFor={field.name} className="text-sm font-semibold text-gray-700 ml-1">
                    个人简介
                  </label>
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    rows={3}
                    placeholder="简单介绍一下你自己..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white/50 transition-all outline-none focus:ring-2 resize-none ${
                      field.state.meta.errors.length
                        ? 'border-red-300 focus:ring-red-100'
                        : 'border-gray-200 focus:border-indigo-400 focus:ring-indigo-100'
                    }`}
                  />
                  <div className="flex justify-between items-center px-1">
                    {field.state.meta.errors.length > 0 ? (
                      <p className="text-xs text-red-500 animate-in fade-in">
                        {field.state.meta.errors.map(getErrorMessage).join(', ')}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className={`text-[10px] font-medium ${field.state.value.length > 100 ? 'text-red-500' : 'text-gray-400'}`}>
                      {field.state.value.length}/100
                    </span>
                  </div>
                </div>
              )}
            />

            {/* Theme Field */}
            <form.Field
              name="theme"
              children={(field) => (
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700 ml-1">外观主题</label>
                  <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100/50 rounded-xl">
                    {(['light', 'dark', 'system'] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => field.handleChange(t)}
                        className={`py-2 text-xs font-medium rounded-lg transition-all ${
                          field.state.value === t
                            ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {t === 'light' ? '浅色' : t === 'dark' ? '深色' : '跟随系统'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            />
          </div>

          <form.Subscribe
             selector={(state) => [state.canSubmit, state.isSubmitting]}
             children={([canSubmit, isSubmitting]) => (
               <button
                 type="submit"
                 disabled={!canSubmit || isSubmitting}
                 className={`w-full py-4 rounded-2xl font-bold text-white shadow-lg transition-all transform active:scale-[0.98] ${
                   !canSubmit || isSubmitting
                     ? 'bg-gray-300 cursor-not-allowed shadow-none'
                     : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200 hover:shadow-indigo-300'
                 }`}
               >
                 {isSubmitting ? (
                   <span className="flex items-center justify-center">
                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                     </svg>
                     保存中...
                   </span>
                 ) : (
                   '保存更改'
                 )}
               </button>
             )}
           />
        </form>

        <section className="mt-10 p-5 bg-indigo-900 rounded-3xl text-indigo-100 overflow-hidden relative">
           <div className="relative z-10">
              <h3 className="text-sm font-bold flex items-center mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                TanStack Form 状态实时预览
              </h3>
              <pre className="text-[11px] font-mono leading-relaxed bg-black/20 p-4 rounded-xl border border-white/10 overflow-auto max-h-48">
                {JSON.stringify(form.state.values, null, 2)}
              </pre>
           </div>
           <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20" />
        </section>
      </main>
    </div>
  )
}
