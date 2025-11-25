import { createFileRoute, useSearch } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import LoginSMS from '../components/LoginSMS'
import PrivacyPopup from '../components/PrivacyPopup'
import { isAuthenticated } from '../lib/auth'

export const Route = createFileRoute('/login')({
  component: Login,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      redirect: (search.redirect as string) || undefined,
    }
  },
})

function Login() {
  const navigate = useNavigate()
  const search = useSearch({ from: '/login' })
  const [privacyChecked, setPrivacyChecked] = useState(false)
  const [showPrivacyPopup, setShowPrivacyPopup] = useState(false)
  const [showShake, setShowShake] = useState(false)

  // H5 环境下自动勾选协议
  useEffect(() => {
    setPrivacyChecked(true)
  }, [])

  // 如果已登录，跳转到首页或指定页面
  useEffect(() => {
    if (isAuthenticated()) {
      const redirectUrl = (search.redirect as string) || '/'
      navigate({ to: redirectUrl as '/' })
    }
  }, [navigate, search.redirect])

  // 抖动动画
  const shakeX = () => {
    setShowShake(true)
    setTimeout(() => setShowShake(false), 500)
  }

  // 打开隐私协议
  const openPrivacyContract = (type: 'user' | 'privacy') => {
    if (type === 'privacy') {
      setShowPrivacyPopup(true)
    } else {
      // 用户协议，可以打开新窗口或跳转
      window.open('https://example.com/user-agreement', '_blank')
    }
  }

  // 处理登录成功
  const handleLoginSuccess = () => {
    const redirectUrl = (search.redirect as string) || '/'
    navigate({ to: redirectUrl as '/' })
  }

  // 处理协议勾选
  const handlePrivacyChange = (checked: boolean) => {
    if (!checked) {
      shakeX()
    }
    setPrivacyChecked(checked)
  }

  // 处理隐私弹窗同意
  const handlePrivacyAgree = () => {
    setPrivacyChecked(true)
    setShowPrivacyPopup(false)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* 顶部装饰 */}
      <div className="relative h-48 bg-gradient-to-b from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-900 overflow-hidden">
        <div className="absolute top-8 left-8 w-24 h-24 bg-orange-200 dark:bg-orange-800 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute top-4 right-12 w-32 h-32 bg-orange-100 dark:bg-orange-900/30 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* 主要内容 */}
      <div className="flex-1 flex flex-col items-center px-6 -mt-24 relative z-10">
        {/* Logo 和标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
            幼幼家园
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            智慧幼教 赋能未来
          </p>
          <div className="inline-block px-4 py-1 rounded-full border-2 border-orange-500 bg-orange-500 text-white text-sm font-medium">
            教师版
          </div>
        </div>

        {/* 登录表单 */}
        <div className="w-full max-w-sm">
          <LoginSMS
            onLoginSuccess={handleLoginSuccess}
            privacyChecked={privacyChecked}
            onPrivacyChange={handlePrivacyChange}
            showShake={showShake}
          />
        </div>

        {/* 用户协议 */}
        <div
          className={`mt-6 flex items-start gap-2 transition-transform ${
            showShake ? 'animate-bounce' : ''
          }`}
        >
          <input
            type="checkbox"
            id="agree"
            checked={privacyChecked}
            onChange={(e) => handlePrivacyChange(e.target.checked)}
            className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
          />
          <label htmlFor="agree" className="text-sm text-gray-600 dark:text-gray-400">
            我已阅读并同意幼幼家园的{' '}
            <button
              type="button"
              onClick={() => openPrivacyContract('user')}
              className="text-orange-600 dark:text-orange-400 hover:underline"
            >
              《用户协议》
            </button>
            {' '}和{' '}
            <button
              type="button"
              onClick={() => openPrivacyContract('privacy')}
              className="text-orange-600 dark:text-orange-400 hover:underline"
            >
              《隐私政策》
            </button>
          </label>
        </div>

        {/* 版本信息 */}
        <div className="mt-auto mb-6 text-xs text-gray-400 dark:text-gray-500">
          当前版本 2.7.9(24815)
        </div>
      </div>

      {/* 底部装饰 */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-100 to-transparent dark:from-orange-900/20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-200 to-transparent dark:from-orange-800/20"></div>
      </div>

      {/* 隐私协议弹窗 */}
      <PrivacyPopup
        open={showPrivacyPopup}
        onClose={() => setShowPrivacyPopup(false)}
        onAgree={handlePrivacyAgree}
      />
    </div>
  )
}
