import { useState, useEffect } from 'react'
import Button from './Button'
import { sendVerifyCode, loginWithSms } from '../lib/auth-api'
import { saveToken } from '../lib/auth'

interface LoginSMSProps {
  onLoginSuccess?: () => void
  privacyChecked: boolean
  onPrivacyChange: (checked: boolean) => void
  showShake?: boolean
}

function LoginSMS({
  onLoginSuccess,
  privacyChecked,
  onPrivacyChange,
  showShake = false,
}: LoginSMSProps) {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [countdown, setCountdown] = useState(0)

  // 验证手机号格式
  const validatePhone = (phoneNumber: string): boolean => {
    return /^1[3-9]\d{9}$/.test(phoneNumber)
  }

  // 获取验证码
  const handleGetVerifyCode = async () => {
    if (!privacyChecked) {
      setError('请先阅读并同意用户协议和隐私政策')
      return
    }

    if (!validatePhone(phone)) {
      setError('请输入正确的手机号码')
      return
    }

    setLoading(true)
    setError('')

    try {
      await sendVerifyCode({
        phonenumber: phone,
        codetype: 'login',
      })
      setCodeSent(true)
      setCountdown(60)
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } catch (err) {
      setError(err instanceof Error ? err.message : '发送验证码失败')
    } finally {
      setLoading(false)
    }
  }

  // 短信登录
  const handleLogin = async () => {
    if (!privacyChecked) {
      setError('请先阅读并同意用户协议和隐私政策')
      return
    }

    if (!validatePhone(phone)) {
      setError('请输入正确的手机号码')
      return
    }

    if (!code) {
      setError('请输入验证码')
      return
    }

    setLoading(true)
    setError('')

    try {
      const authData = await loginWithSms(phone, code)
      saveToken(authData)
      onLoginSuccess?.()
      // 登录成功后跳转逻辑在父组件处理
    } catch (err) {
      setError(err instanceof Error ? err.message : '登录失败，请检查验证码')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full space-y-4">
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
          <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      {/* 手机号输入 */}
      <div>
        <input
          type="tel"
          placeholder="请输入手机号码"
          value={phone}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 11)
            setPhone(value)
            setError('')
          }}
          maxLength={11}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          disabled={loading}
        />
      </div>

      {/* 验证码输入 */}
      <div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="请输入验证码"
            value={code}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '')
              setCode(value)
              setError('')
            }}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            disabled={loading || !codeSent}
          />
          <Button
            type="button"
            onClick={handleGetVerifyCode}
            disabled={loading || !validatePhone(phone) || countdown > 0}
            className="px-6 whitespace-nowrap"
          >
            {countdown > 0 ? `${countdown}秒` : codeSent ? '重新获取' : '获取验证码'}
          </Button>
        </div>
      </div>

      {/* 登录按钮 */}
      <Button
        type="button"
        onClick={handleLogin}
        className="w-full py-3 text-lg"
        disabled={loading || !codeSent}
      >
        {loading ? '登录中...' : '登录'}
      </Button>
    </div>
  )
}

export default LoginSMS

