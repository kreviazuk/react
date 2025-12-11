import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useCallback, useRef, useState } from 'react'

interface MemoCardProps {
  onIncrement: () => void
  label: string
}

const MemoCard = React.memo(function MemoCardComponent({
  onIncrement,
  label,
}: MemoCardProps): JSX.Element {
  const renderCount = useRef(0)
  renderCount.current += 1
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-3 shadow-sm space-y-2">
      <p className="text-sm font-semibold text-gray-800">{label}</p>
      <p className="text-xs text-gray-500">子组件渲染次数：{renderCount.current}</p>
      <button
        type="button"
        onClick={onIncrement}
        className="text-xs px-3 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600"
      >
        子组件触发回调
      </button>
    </div>
  )
})

export const Route = createFileRoute('/react-callback')({
  component: ReactCallbackPage,
})

function ReactCallbackPage(): JSX.Element {
  const [parentClicks, setParentClicks] = useState(0)
  const stableHandler = useCallback(() => {
    setParentClicks((prev) => prev + 1)
  }, [])
  const unstableHandler = () => {
    setParentClicks((prev) => prev + 1)
  }

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 pb-20 px-4">
      <header className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">useCallback + React.memo</p>
          <h1 className="text-lg font-semibold text-gray-900">Callback Demo</h1>
        </div>
        <Link to="/" className="text-xs text-orange-600 underline underline-offset-4">
          返回首页
        </Link>
      </header>

      <section className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-600">
            父级点击次数：<span className="font-semibold">{parentClicks}</span>
          </div>
          <p className="text-[11px] text-gray-500">
            对比稳定/不稳定回调时子组件的渲染次数
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MemoCard label="稳定回调 (useCallback)" onIncrement={stableHandler} />
          <MemoCard label="不稳定回调 (每次重建)" onIncrement={unstableHandler} />
        </div>
      </section>
    </div>
  )
}

