import { createFileRoute, Link } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/react-memo')({
  component: ReactMemoPage,
})

function ReactMemoPage(): JSX.Element {
  const [keyword, setKeyword] = useState('')
  const rawList = useMemo(
    () => ['React', 'TanStack', 'TypeScript', 'Query', 'Router', 'Memo'],
    []
  )
  const filteredList = useMemo(() => {
    if (!keyword.trim()) return rawList
    return rawList.filter((item) =>
      item.toLowerCase().includes(keyword.trim().toLowerCase())
    )
  }, [keyword, rawList])

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 pb-20 px-4">
      <header className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">useMemo 衍生数据</p>
          <h1 className="text-lg font-semibold text-gray-900">Memo Demo</h1>
        </div>
        <Link to="/" className="text-xs text-orange-600 underline underline-offset-4">
          返回首页
        </Link>
      </header>

      <section className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">输入关键字过滤列表</p>
          <input
            className="text-sm px-3 py-1.5 rounded-lg border border-gray-200 focus:border-orange-400 focus:outline-none"
            placeholder="输入关键字过滤"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {filteredList.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm text-gray-800"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

