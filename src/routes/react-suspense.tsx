import { createFileRoute, Link } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const LazyBox = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 450))
  return {
    default: function LazyBoxInner(): JSX.Element {
      return (
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          Lazy 组件加载完成 (模拟 450ms)
        </div>
      )
    },
  }
})

export const Route = createFileRoute('/react-suspense')({
  component: ReactSuspensePage,
})

function ReactSuspensePage(): JSX.Element {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 pb-20 px-4">
      <header className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Suspense + lazy</p>
          <h1 className="text-lg font-semibold text-gray-900">Suspense Demo</h1>
        </div>
        <Link to="/" className="text-xs text-orange-600 underline underline-offset-4">
          返回首页
        </Link>
      </header>

      <section className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">懒加载子组件并展示 fallback</p>
          <span className="text-[11px] text-gray-500">模拟 450ms 加载</span>
        </div>
        <Suspense
          fallback={
            <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-500">
              Loading lazy component...
            </div>
          }
        >
          <LazyBox />
        </Suspense>
      </section>
    </div>
  )
}

