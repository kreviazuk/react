import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createMemoryHistory, createRouter } from '@tanstack/react-router'
import { routeTree } from '../routeTree.gen'

describe('Home', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  })

  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: ['/'],
    }),
  })

  it('应该渲染欢迎标题', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    )
    expect(screen.getByText('欢迎使用 React H5 应用')).toBeInTheDocument()
  })

  it('应该显示计数器初始值为 0', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    )
    expect(screen.getByText('计数器: 0')).toBeInTheDocument()
  })

  it('应该渲染所有功能卡片', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    )
    expect(screen.getByText('Vite')).toBeInTheDocument()
    expect(screen.getByText('React 18')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('TanStack Query')).toBeInTheDocument()
    expect(screen.getByText('TanStack Router')).toBeInTheDocument()
  })
})

