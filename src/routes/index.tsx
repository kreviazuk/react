import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          欢迎使用 React H5 应用
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          基于 React + TypeScript + Vite + TanStack 构建
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Vite" description="极速的前端构建工具" />
        <Card title="React 18" description="现代化的 UI 库" />
        <Card title="TypeScript" description="类型安全的 JavaScript" />
        <Card title="TanStack Query" description="强大的数据获取库" />
        <Card title="TanStack Router" description="类型安全的路由" />
      </div>

      <div className="mt-8 text-center">
        <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            计数器: {count}
          </p>
          <div className="space-x-4">
            <Button onClick={() => setCount(count + 1)}>增加</Button>
            <Button onClick={() => setCount(count - 1)} variant="secondary">
              减少
            </Button>
            <Button onClick={() => setCount(0)} variant="danger">
              重置
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

