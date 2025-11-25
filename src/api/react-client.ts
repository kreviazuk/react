/**
 * React 环境下的 JsonServiceClient 适配器
 * 使用 fetch API 替代 uni.request
 */
import { type IReturn, HttpMethods } from './yoyo.client'
import { getToken } from '../lib/auth'

export class ReactJsonServiceClient {
  baseUrl: string

  constructor(baseUrl?: string) {
    // 开发环境使用代理，生产环境使用完整 URL
    if (baseUrl) {
      this.baseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    } else {
      const defaultBaseUrl =
        import.meta.env.MODE === 'development'
          ? '/api/educrm/json/reply/'
          : `${import.meta.env.VITE_API_BASE_URL || 'https://apigwtest.yban.co/'}api/educrm/json/reply/`
      this.baseUrl = defaultBaseUrl
      if (!this.baseUrl.endsWith('/')) {
        this.baseUrl += '/'
      }
    }
  }

  private toAbsoluteUrl<T>(request: IReturn<T>): string {
    return `${this.baseUrl}${request.getTypeName()}`
  }
  private async fetchRequest<T>(
    request: IReturn<T>,
    method?: HttpMethods,
    appid?: number,
    auth?: boolean
  ): Promise<T> {
    // 检查认证
    if (auth) {
      const token = getToken()
      if (!token) {
        throw new Error('请先登录')
      }
    }

    // 构建 URL
    const url = this.toAbsoluteUrl(request)
    const requestMethod = method ?? request.getMethod() ?? HttpMethods.POST

    // 构建请求头
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'x-appid': String(appid ?? 1),
    }

    // 添加认证 token
    if (auth !== false) {
      const token = getToken()
      if (token) {
        headers['Authorization'] = `Bearer ${token}`
      }
    }

    // 构建请求配置
    const fetchConfig: RequestInit = {
      method: requestMethod,
      headers,
    }

    // 如果不是 GET 请求，添加 body
    if (requestMethod !== HttpMethods.GET) {
      fetchConfig.body = JSON.stringify(request)
    }

    try {
      const response = await fetch(url, fetchConfig)
      
      if (!response.ok) {
        throw new Error(`请求失败: ${response.status} ${response.statusText}`)
      }

      const res: any = await response.json()

      // 处理响应格式，与 yoyo.client.ts 保持一致
      if (
        !Object.prototype.hasOwnProperty.call(res, 'ret') &&
        !Object.prototype.hasOwnProperty.call(res, 'code') &&
        res.responseStatus?.errorCode &&
        res.responseStatus?.message
      ) {
        res.ret = false
        res.code = 500
        if (!Object.prototype.hasOwnProperty.call(res, 'message')) {
          res.message = res.responseStatus?.message
        }
      }

      // 统一响应格式
      if (!Object.prototype.hasOwnProperty.call(res, 'ret')) {
        res.ret = true
      } else {
        res.code = res.ret ? 200 : 500
      }
      if (!Object.prototype.hasOwnProperty.call(res, 'code')) {
        res.code = 200
      } else {
        res.ret = res.code === 200 || res.code === 0
      }
      if (res.ret) {
        res.code = 200
      }

      return res
    } catch (error) {
      console.error('API 调用异常:', error, request)
      throw error
    }
  }

  public async get<T>({
    request,
    appid,
    auth,
  }: {
    request: IReturn<T>
    appid?: number
    auth?: boolean
  }): Promise<T> {
    return this.fetchRequest<T>(request, HttpMethods.GET, appid, auth)
  }

  public async post<T>({
    request,
    appid,
    auth,
  }: {
    request: IReturn<T>
    appid?: number
    auth?: boolean
  }): Promise<T> {
    return this.fetchRequest<T>(request, HttpMethods.POST, appid, auth)
  }

  public async send<T>({
    request,
    appid,
    auth,
  }: {
    request: IReturn<T>
    appid?: number
    auth?: boolean
  }): Promise<T> {
    const method = request.getMethod()
      ? (request.getMethod() as HttpMethods)
      : HttpMethods.POST
    return this.fetchRequest<T>(request, method, appid, auth)
  }
}

