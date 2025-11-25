/**
 * 认证相关工具函数
 */
import type { AuthenticateResponse } from '@/api/auth.dtos'

// 使用 API DTO 中的类型
export type AuthResponse = AuthenticateResponse

const TOKEN_KEY = 'bearerToken'
const REFRESH_TOKEN_KEY = 'refreshToken'
const USER_INFO_KEY = 'userInfo'
const SCHOOL_INFO_KEY = 'schoolInfo'

/**
 * 保存 Token
 */
export function saveToken(authData: AuthResponse): void {
  if (authData.bearerToken) {
    localStorage.setItem(TOKEN_KEY, authData.bearerToken)
  }
  if (authData.refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, authData.refreshToken)
  }
  localStorage.setItem(USER_INFO_KEY, JSON.stringify({
    userId: authData.userId || '',
    userName: authData.userName || '',
    roles: authData.roles || [],
    meta: authData.meta || {},
  }))

  // 从 meta.Email 中解析并保存 schoolId
  // 格式: user@{schoolId}
  if (authData.meta?.Email) {
    try {
      const tokenMail = authData.meta.Email
      const parts = tokenMail.split('@')
      if (parts.length >= 2 && parts[1]) {
        const schoolId = parts[1]
        setSchoolId(schoolId)
      }
    } catch (error) {
      // 解析 schoolId 失败
    }
  }
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
 * 学校信息类型（基于 API DTO，用于本地存储）
 */
export interface SchoolInfo {
  schoolId: string
  schoolName: string
  logo?: string
  pointName?: string
}

/**
 * 获取学校ID（从已保存的 schoolId 获取，或从 meta.Email 中解析）
 */
export function getSchoolId(): string | null {
  const userInfo = getUserInfo()
  
  // 优先从已保存的 meta.schoolId 获取
  if (userInfo?.meta?.schoolId) {
    return userInfo.meta.schoolId
  }
  
  // 如果没有保存，尝试从 meta.Email 中解析
  // 格式: user@{schoolId}
  if (userInfo?.meta?.Email) {
    try {
      const tokenMail = userInfo.meta.Email
      const parts = tokenMail.split('@')
      if (parts.length >= 2 && parts[1]) {
        const schoolId = parts[1]
        // 解析成功后保存，下次直接使用
        setSchoolId(schoolId)
        return schoolId
      }
    } catch (error) {
      // 从 Email 解析 schoolId 失败
    }
  }
  
  return null
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
 * 保存学校信息
 */
export function saveSchoolInfo(schoolInfo: SchoolInfo): void {
  localStorage.setItem(SCHOOL_INFO_KEY, JSON.stringify(schoolInfo))
}

/**
 * 获取学校信息
 */
export function getSchoolInfo(): SchoolInfo | null {
  const schoolInfoStr = localStorage.getItem(SCHOOL_INFO_KEY)
  if (!schoolInfoStr) return null
  try {
    return JSON.parse(schoolInfoStr)
  } catch {
    return null
  }
}

/**
 * 获取学校名称
 */
export function getSchoolName(): string | null {
  const schoolInfo = getSchoolInfo()
  return schoolInfo?.schoolName || null
}

/**
 * 清除 Token 和用户信息
 */
export function clearAuth(): void {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  localStorage.removeItem(USER_INFO_KEY)
  localStorage.removeItem(SCHOOL_INFO_KEY)
}

/**
 * 检查是否已登录
 */
export function isAuthenticated(): boolean {
  return !!getToken()
}

