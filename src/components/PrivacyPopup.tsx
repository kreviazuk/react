import { useEffect } from 'react'

interface PrivacyPopupProps {
  open: boolean
  onClose: () => void
  onAgree: () => void
}

function PrivacyPopup({ open, onClose, onAgree }: PrivacyPopupProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          隐私协议
        </h2>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4 mb-6">
          <p>
            欢迎使用幼幼家园！我们非常重视您的隐私保护。在使用我们的服务前，请您仔细阅读并充分理解本隐私政策。
          </p>
          <p>
            我们会收集和使用您的个人信息，包括但不限于手机号码、设备信息等，用于提供更好的服务体验。
          </p>
          <p>
            我们承诺不会向第三方泄露您的个人信息，除非获得您的明确同意或法律法规要求。
          </p>
          <p>
            您可以随时访问、更正或删除您的个人信息。如有疑问，请联系我们的客服。
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            取消
          </button>
          <button
            onClick={onAgree}
            className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            同意
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPopup

