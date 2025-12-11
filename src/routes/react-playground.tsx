import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/react-playground')({
  component: ReactPlayground,
})

function ReactPlayground(): JSX.Element {
  const links = [
    { to: '/react-effect', label: 'useEffect 依赖对比' },
    { to: '/react-memo', label: 'useMemo 衍生数据' },
    { to: '/react-callback', label: 'useCallback + React.memo' },
    { to: '/react-suspense', label: 'Suspense + lazy' },
  ]

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 pb-20 px-4">
      <div className="pt-6 pb-3 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">React 学习小抄</p>
          <h1 className="text-lg font-semibold text-gray-900">Playground</h1>
        </div>
        <Link
          to="/"
          className="text-xs text-orange-600 underline underline-offset-4"
        >
          返回首页
        </Link>
      </div>

      <div className="space-y-3">
        {links.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex justify-between items-center rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:border-orange-200"
          >
            <span className="text-sm font-semibold text-gray-800">{item.label}</span>
            <span className="text-xs text-orange-600">进入</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
