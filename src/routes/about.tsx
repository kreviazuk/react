import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          关于项目
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              技术栈
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>React 18 - 用户界面库</li>
              <li>TypeScript - 类型安全</li>
              <li>Vite - 构建工具</li>
              <li>TanStack Router - 类型安全的路由管理</li>
              <li>TanStack Query - 强大的数据获取和状态管理</li>
              <li>Tailwind CSS - 样式框架</li>
              <li>Vitest - 单元测试</li>
              <li>React Testing Library - 组件测试</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              功能特性
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
              <li>⚡️ 快速的开发体验</li>
              <li>🎨 现代化的 UI 设计</li>
              <li>📱 响应式布局</li>
              <li>🧪 完整的测试支持</li>
              <li>🔧 代码质量工具（ESLint + Prettier）</li>
              <li>🔄 TanStack Query 数据管理</li>
              <li>🛣️ 类型安全的路由</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

