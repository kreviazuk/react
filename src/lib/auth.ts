/**
 * 认证相关工具函数
 */

export interface AuthResponse {
  userId: string
  bearerToken: string
  refreshToken: string
  sessionId: string
  userName: string
  roles: string[]
  meta: Record<string, string>
}

const TOKEN_KEY = 'bearerToken'
const REFRESH_TOKEN_KEY = 'refreshToken'
const USER_INFO_KEY = 'userInfo'

/**
 * 保存 Token
 */
export function saveToken(authData: AuthResponse): void {
  localStorage.setItem(TOKEN_KEY, authData.bearerToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, authData.refreshToken)
  localStorage.setItem(USER_INFO_KEY, JSON.stringify({
    userId: authData.userId,
    userName: authData.userName,
    roles: authData.roles,
    meta: authData.meta,
  }))
}

/**
 * 获取 Token
 */
export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY)
}

/**
 * 获取 Refresh Token
 */
export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

/**
 * 获取用户信息
 */
export function getUserInfo(): {
  userId: string
  userName: string
  roles: string[]
  meta: Record<string, string>
} | null {
  const userInfoStr = localStorage.getItem(USER_INFO_KEY)
  if (!userInfoStr) return null
  try {
    return JSON.parse(userInfoStr)
  } catch {
    return null
  }
}

/**
 * 获取学校ID（从 meta.Email 中解析）
 */
export function getSchoolId(): string | null {
  const userInfo = getUserInfo()
  if (!userInfo?.meta?.Email) return null
  
  // 根据实际格式解析 schoolId
  // 这里假设 Email 格式包含 schoolId，需要根据实际情况调整
  try {
    const email = userInfo.meta.Email
    // 示例：如果 Email 格式是 "schoolId@example.com"
    const match = email.match(/^(\d+)@/)
    return match ? match[1] : null
  } catch {
    return null
  }
}

/**
 * 设置学校ID
 */
export function setSchoolId(schoolId: string): void {
  const userInfo = getUserInfo()
  if (userInfo) {
    userInfo.meta = { ...userInfo.meta, schoolId }
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
  }
}

/**
 * 清除 Token 和用户信息
 */
export function clearAuth(): void {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  localStorage.removeItem(USER_INFO_KEY)
}

/**
 * 检查是否已登录
 */
export function isAuthenticated(): boolean {
  return !!getToken()
}

