import { useQuery } from '@tanstack/react-query'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

interface PostsResponse {
  posts: Post[]
  total: number
}

// 模拟 API 调用
async function fetchPosts(): Promise<PostsResponse> {
  // 这里可以替换为真实的 API 调用
  // const response = await fetch('https://api.example.com/posts')
  // return response.json()
  
  // 模拟数据
  await new Promise((resolve) => setTimeout(resolve, 1000))
  
  return {
    posts: [
      {
        id: 1,
        title: 'TanStack Query 简介',
        body: 'TanStack Query 是一个强大的数据获取和状态管理库，提供了缓存、同步、更新等功能。',
        userId: 1,
      },
      {
        id: 2,
        title: 'TanStack Router 使用指南',
        body: 'TanStack Router 提供了类型安全的路由管理，支持代码分割和预加载。',
        userId: 1,
      },
    ],
    total: 2,
  }
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  })
}

