import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/react-effect')({
  component: ReactEffectPage,
})

function ReactEffectPage(): JSX.Element {
  const [effectValue, setEffectValue] = useState(0)
  const effectCountWithDep = useRef(0)
  const effectCountNoDep = useRef(0)
  // useRef 示例：存储上一次 effectValue，用来对比新旧值；不会触发重渲染
  const prevEffectValue = useRef(0)

  useEffect(() => {
    effectCountNoDep.current += 1
  })

  useEffect(() => {
    effectCountWithDep.current += 1
    prevEffectValue.current = effectValue
  }, [effectValue])

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 pb-20 px-4">
      <header className="pt-6 pb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">useEffect 依赖对比</p>
          <h1 className="text-lg font-semibold text-gray-900">Effect Demo</h1>
        </div>
        <Link to="/" className="text-xs text-orange-600 underline underline-offset-4">
          返回首页
        </Link>
      </header>

      <section className="rounded-xl bg-white p-4 shadow-sm border border-gray-100 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">无依赖 vs. 依赖 [effectValue]</p>
          <button
            type="button"
            className="px-3 py-1 text-xs text-white bg-orange-500 rounded-full hover:bg-orange-600"
            onClick={() => setEffectValue((prev) => prev + 1)}
          >
            effectValue +1
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs text-gray-700">
          <div className="rounded-lg bg-gray-50 p-3 border border-gray-100">
            <p className="font-semibold text-gray-800">无依赖 useEffect</p>
            <p>执行次数：{effectCountNoDep.current}</p>
            <p className="text-gray-500">每次渲染都会执行</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-3 border border-gray-100">
            <p className="font-semibold text-gray-800">依赖 [effectValue]</p>
            <p>执行次数：{effectCountWithDep.current}</p>
            <p className="text-gray-500">仅 effectValue 改变时执行</p>
            <p className="text-gray-500 mt-1">
              上一次值（useRef 保存）：{prevEffectValue.current}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

