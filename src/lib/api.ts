/**
 * API 配置和请求工具
 */

// 获取 API 基础地址
// 开发环境使用代理，生产环境使用完整 URL
export const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? '' // 开发环境使用相对路径，通过 Vite 代理
    : import.meta.env.VITE_API_BASE_URL || 'https://apigw.yban.co/'

/**
 * 请求配置接口
 */
export interface RequestConfig extends RequestInit {
  params?: Record<string, string | number | boolean>
  timeout?: number
}

/**
 * 构建完整的 URL
 */
function buildUrl(url: string, params?: Record<string, string | number | boolean>): string {
  // 开发环境使用相对路径（通过代理），生产环境使用完整 URL
  const baseUrl = API_BASE_URL.endsWith('/') ? API_BASE_URL.slice(0, -1) : API_BASE_URL
  const path = url.startsWith('/') ? url : `/${url}`
  // 如果 baseUrl 为空（开发环境），直接返回 path
  const fullUrl = baseUrl ? `${baseUrl}${path}` : path

  if (!params || Object.keys(params).length === 0) {
    return fullUrl
  }

  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value))
    }
  })

  const queryString = searchParams.toString()
  return queryString ? `${fullUrl}?${queryString}` : fullUrl
}

/**
 * 请求超时处理
 */
function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 30000
): Promise<Response> {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('请求超时')), timeout)
    ),
  ])
}

/**
 * 处理响应
 */
async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type')

  if (!response.ok) {
    let errorMessage = `请求失败: ${response.status} ${response.statusText}`
    try {
      const errorData = await response.json()
      errorMessage = errorData.message || errorData.error || errorMessage
    } catch {
      // 如果不是 JSON 格式，使用默认错误信息
    }
    throw new Error(errorMessage)
  }

  // 如果响应为空，返回空对象
  if (response.status === 204 || response.headers.get('content-length') === '0') {
    return {} as T
  }

  // 根据 Content-Type 解析响应
  if (contentType && contentType.includes('application/json')) {
    return response.json()
  }

  return response.text() as unknown as T
}

/**
 * 通用请求方法
 */
export async function request<T = unknown>(
  url: string,
  config: RequestConfig = {}
): Promise<T> {
  const { params, timeout = 30000, headers = {}, ...restConfig } = config

  const fullUrl = buildUrl(url, params)

  // 默认请求头
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  }

  // 添加认证 token
  const token = localStorage.getItem('bearerToken')
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`
  }

  try {
    const response = await fetchWithTimeout(
      fullUrl,
      {
        ...restConfig,
        headers: defaultHeaders,
      },
      timeout
    )

    return handleResponse<T>(response)
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('网络请求失败')
  }
}

/**
 * GET 请求
 */
export function get<T = unknown>(
  url: string,
  config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
  return request<T>(url, { ...config, method: 'GET' })
}

/**
 * POST 请求
 */
export function post<T = unknown>(
  url: string,
  data?: unknown,
  config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
  return request<T>(url, {
    ...config,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  })
}

/**
 * PUT 请求
 */
export function put<T = unknown>(
  url: string,
  data?: unknown,
  config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
  return request<T>(url, {
    ...config,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  })
}

/**
 * PATCH 请求
 */
export function patch<T = unknown>(
  url: string,
  data?: unknown,
  config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
  return request<T>(url, {
    ...config,
    method: 'PATCH',
    body: data ? JSON.stringify(data) : undefined,
  })
}

/**
 * DELETE 请求
 */
export function del<T = unknown>(
  url: string,
  config?: Omit<RequestConfig, 'method' | 'body'>
): Promise<T> {
  return request<T>(url, { ...config, method: 'DELETE' })
}

