/**
 * 认证相关 API
 */
import { post } from './api'
import type { AuthResponse } from './auth'

/**
 * 发送验证码请求参数
 */
export interface SendVerifyCodeRequest {
  phonenumber: string
  codetype: 'login' | 'register' | 'reset'
}

/**
 * 发送验证码响应
 */
export interface SendVerifyCodeResponse {
  ret: boolean
  message: string
  schoolInfos?: unknown[]
}

/**
 * 登录请求参数
 */
export interface LoginRequest {
  provider: 'mobile' | 'wechat'
  qop: 'teacher' | 'parent'
  oauth_token: string
  oauth_verifier: '' | 'smsotp' | 'wechat' | 'onepass'
  userName: string
  password: string
}

/**
 * 发送验证码
 */
export function sendVerifyCode(data: SendVerifyCodeRequest): Promise<SendVerifyCodeResponse> {
  return post<SendVerifyCodeResponse>('/api/educrm/json/reply/SendVerifyCodeReq', data)
}

/**
 * 登录认证
 */
export function authenticate(data: LoginRequest): Promise<AuthResponse> {
  return post<AuthResponse>('/api/educrm/json/reply/Authenticate', data)
}

/**
 * 验证码登录
 */
export function loginWithSms(phone: string, code: string): Promise<AuthResponse> {
  return authenticate({
    provider: 'mobile',
    qop: 'teacher',
    oauth_token: '',
    oauth_verifier: 'smsotp',
    userName: phone,
    password: code,
  })
}

/**
 * 密码登录
 */
export function loginWithPassword(phone: string, password: string): Promise<AuthResponse> {
  return authenticate({
    provider: 'mobile',
    qop: 'teacher',
    oauth_token: '',
    oauth_verifier: '',
    userName: phone,
    password: password,
  })
}

/**
 * 微信登录（需要先获取微信授权码）
 */
export function loginWithWechat(wechatCode: string): Promise<AuthResponse> {
  return authenticate({
    provider: 'wechat',
    qop: 'teacher',
    oauth_token: '',
    oauth_verifier: 'wechat',
    userName: wechatCode,
    password: '',
  })
}

