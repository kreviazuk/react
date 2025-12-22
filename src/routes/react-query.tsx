import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export const Route = createFileRoute('/react-query')({
  component: ReactQueryPage,
})

// 模拟 API 请求
const fetchRandomUser = async (fail = false) => {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  if (fail) throw new Error('网络连接异常，请重试')
  
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  return data.results[0]
}

function ReactQueryPage() {
  const [shouldFail, setShouldFail] = useState(false)
  const queryClient = useQueryClient()

  // 1. 使用 useQuery
  const { data, isLoading, isError, error, refetch, isFetching, dataUpdatedAt } = useQuery({
    queryKey: ['randomUser'],
    queryFn: () => fetchRandomUser(shouldFail),
    // 故意设置较短的 staleTime，方便演示
    staleTime: 5000, 
  })

  return (
    <div className="min-h-screen bg-gray-50 pb-20 px-4">
      {/* Header */}
      <header className="max-w-xl mx-auto pt-8 pb-6 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold tracking-wider text-blue-600 uppercase">TanStack Query</p>
          <h1 className="text-2xl font-extrabold text-gray-900">数据获取实验室</h1>
        </div>
        <Link to="/" className="text-xs text-gray-500 hover:text-blue-600 border-b border-gray-300">
          返回首页
        </Link>
      </header>

      <main className="max-w-xl mx-auto space-y-6">
        {/* 控制面板 */}
        <section className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">模拟错误模式:</span>
            <button
              onClick={() => setShouldFail(!shouldFail)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                shouldFail ? 'bg-red-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  shouldFail ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="space-x-2">
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all"
            >
              手动刷新 (Refetch)
            </button>
            <button
              onClick={() => queryClient.invalidateQueries({ queryKey: ['randomUser'] })}
              className="px-4 py-2 border border-blue-200 text-blue-600 rounded-xl text-sm font-medium hover:bg-blue-50 active:scale-95 transition-all"
            >
              使缓存失效 (Invalidate)
            </button>
          </div>
        </section>

        {/* 数据展示卡片 */}
        <div className="relative group">
          {/* 背景装饰：表示正在抓取的动画 */}
          {isFetching && (
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />
          )}

          <section className="relative bg-white p-8 rounded-3xl shadow-xl shadow-blue-900/5 border border-white min-h-[300px] flex flex-col items-center justify-center text-center">
            {isLoading ? (
              // 1. 加载状态
              <div className="space-y-4 animate-pulse">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto" />
                <div className="space-y-2">
                  <div className="w-48 h-6 bg-gray-200 rounded-lg mx-auto" />
                  <div className="w-32 h-4 bg-gray-100 rounded-lg mx-auto" />
                </div>
                <p className="text-blue-500 font-medium text-sm">正在请求服务器...</p>
              </div>
            ) : isError ? (
              // 2. 错误状态
              <div className="space-y-4">
                <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                  ⚠️
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Oops! 出错了</h3>
                  <p className="text-gray-500 text-sm mt-1">{(error as Error).message}</p>
                </div>
                <button
                  onClick={() => refetch()}
                  className="px-6 py-2 bg-red-50 text-red-600 border border-red-200 rounded-full text-sm font-bold hover:bg-red-100 transition-colors"
                >
                  重试一次
                </button>
              </div>
            ) : (
              // 3. 成功状态
              <div className="space-y-6">
                <div className="relative">
                  <img
                    src={data.picture.large}
                    alt="avatar"
                    className="w-32 h-32 rounded-full ring-4 ring-blue-50 mx-auto transition-transform duration-500 hover:scale-110 shadow-lg"
                  />
                  {isFetching && (
                    <div className="absolute top-0 right-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white animate-bounce flex items-center justify-center">
                       <span className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                </div>
                
                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {data.name.first} {data.name.last}
                  </h2>
                  <p className="text-gray-500 font-medium mt-1">{data.email}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                      Location: {data.location.city}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 rounded-full text-[10px] font-bold text-blue-500 uppercase tracking-tighter">
                      Gender: {data.gender}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* 知识点解析 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              什么是缓存 (Stale-while-revalidate)
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              当你再次请求时，Query 会立即显示<strong>上次缓存</strong>的数据（所以不会白屏），同时在后台发起新请求，完成后静默更新。这就是 <code>isFetching</code> 的作用。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <h4 className="flex items-center text-sm font-bold text-gray-800 mb-3">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              数据更新时间
            </h4>
            <pre className="text-[10px] font-mono bg-gray-50 p-2 rounded-lg text-gray-600">
              最后更新: {new Date(dataUpdatedAt).toLocaleTimeString()}
            </pre>
            <p className="text-[10px] text-gray-400 mt-2">
              StaleTime 内再次进入页面不会触发真实请求。
            </p>
          </div>
        </div>

        {/* 底部提示 */}
        <p className="text-center text-[10px] text-gray-400">
          尝试开启“模拟错误模式”后点击刷新，观察 Error 状态的处理。
        </p>
      </main>
    </div>
  )
}
