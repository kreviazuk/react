import { createFileRoute } from '@tanstack/react-router'
import { getUserInfo } from '../lib/auth'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const userInfo = getUserInfo()

  return (
    <div className="px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          欢迎使用幼幼家园
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          智慧幼教 赋能未来
        </p>
        {userInfo && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            欢迎，{userInfo.userName}
          </p>
        )}
      </div>

      <div className="max-w-2xl mx-auto mt-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            系统功能
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            这里是首页内容，您可以根据实际需求添加功能模块。
          </p>
        </div>
      </div>
    </div>
  )
}
