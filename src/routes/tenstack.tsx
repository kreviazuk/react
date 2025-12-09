import { createFileRoute } from '@tanstack/react-router'
import {
  useQuery,
  useMutation,
  useQueryClient,
  type QueryClient,
} from '@tanstack/react-query'
import { useMemo, useState, useEffect } from 'react'

interface TodoItem {
  id: number
  title: string
  completed: boolean
}

interface AddTodoInput {
  title: string
}

function fetchTodos(): Promise<TodoItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: '拉取园所列表示例', completed: true },
        { id: 2, title: '体验 TanStack Query', completed: false },
        { id: 3, title: '尝试 Mutation 与缓存更新', completed: false },
      ])
    }, 280)
  })
}

function createTodo(input: AddTodoInput): Promise<TodoItem> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Date.now(),
        title: input.title,
        completed: false,
      })
    }, 240)
  })
}

export const Route = createFileRoute('/tenstack')({
  component: TenStackDemo,
})

function TenStackDemo(): JSX.Element {
  const queryClient = useQueryClient()
  const [keyword, setKeyword] = useState('')

  const {
    data: todos = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['demo-todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60,
  })

  const addTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      queryClient.setQueryData<TodoItem[]>(['demo-todos'], (prev) => {
        const list = prev ?? []
        return [newTodo, ...list]
      })
    },
  })

  const filteredTodos = useMemo(() => {
    if (!keyword.trim()) return todos
    return todos.filter((item) =>
      item.title.toLowerCase().includes(keyword.trim().toLowerCase())
    )
  }, [keyword, todos])

  const handleAdd = (title: string): void => {
    if (!title.trim()) return
    addTodoMutation.mutate({ title: title.trim() })
  }

  useEffect(() => {
    // 预加载或在路由返回时保持数据
    queryClient.prefetchQuery({
      queryKey: ['demo-todos'],
      queryFn: fetchTodos,
      staleTime: 1000 * 60,
    })
  }, [queryClient])

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen px-4 pb-20">
      <div className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">TanStack Query 示例</p>
          <h1 className="text-xl font-semibold text-gray-900">TenStack Playground</h1>
        </div>
        <button
          type="button"
          className="px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          {isFetching ? '刷新中...' : '刷新'}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <input
            className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none"
            placeholder="搜索或新增待办"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button
            type="button"
            className="px-4 py-2 rounded-lg text-white bg-orange-500 hover:bg-orange-600 text-sm"
            onClick={() => handleAdd(keyword)}
            disabled={addTodoMutation.isPending}
          >
            {addTodoMutation.isPending ? '添加中...' : '添加'}
          </button>
        </div>

        {isLoading && <p className="text-sm text-gray-500">加载中...</p>}
        {!isLoading && filteredTodos.length === 0 && (
          <p className="text-sm text-gray-400">暂无数据</p>
        )}
        <div className="space-y-3">
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{todo.title}</p>
                <p className="text-xs text-gray-500">
                  {todo.completed ? '已完成' : '待处理'} · #{todo.id}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  todo.completed ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                }`}
              >
                {todo.completed ? 'Done' : 'Pending'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

