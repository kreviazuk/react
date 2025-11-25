import { usePosts } from '../hooks/use-posts'
import Button from '../components/Button'

function Posts() {
  const { data, isLoading, error, refetch } = usePosts()

  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">加载中...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-4 py-6">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">
            加载失败: {error instanceof Error ? error.message : '未知错误'}
          </p>
          <Button onClick={() => refetch()} className="mt-4">
            重试
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          文章列表
        </h1>
        <Button onClick={() => refetch()}>刷新</Button>
      </div>

      <div className="grid gap-4">
        {data?.posts.map((post) => (
          <div
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
          </div>
        ))}
      </div>

      {data && data.posts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">暂无文章</p>
        </div>
      )}
    </div>
  )
}

export default Posts

