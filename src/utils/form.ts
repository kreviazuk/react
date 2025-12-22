/**
 * 安全地渲染 TanStack Form 的错误信息
 * 因为配合 Zod 使用时，错误可能是一个对象而非字符串
 */
export const getErrorMessage = (err: unknown): string => {
  if (typeof err === 'object' && err !== null && 'message' in err) {
    return String((err as { message: unknown }).message)
  }
  return String(err)
}
