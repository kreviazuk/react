import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { isAuthenticated, getUserInfo, clearAuth } from '../lib/auth'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const routerState = useRouterState()
  const userInfo = getUserInfo()
  const authenticated = isAuthenticated()
  const currentPath = routerState.location.pathname

  // 检查是否需要重定向到登录页
  useEffect(() => {
    if (!authenticated && currentPath !== '/login') {
      window.location.href = '/login'
    }
  }, [authenticated, currentPath])

  // 如果是登录页，不显示导航栏
  if (currentPath === '/login') {
    return (
      <>
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    幼幼家园
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                    activeProps={{
                      className:
                        'border-primary-500 text-gray-900 dark:text-white',
                    }}
                  >
                    首页
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {userInfo && (
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {userInfo.userName}
                  </span>
                )}
                <button
                  onClick={() => {
                    clearAuth()
                    window.location.href = '/login'
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  退出
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
      <TanStackRouterDevtools />
    </>
  )
}

