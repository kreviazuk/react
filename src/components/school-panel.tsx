import { type ChangeEvent } from 'react'
import { SchoolInfoDTO } from '@/api/base.dtos'

interface SchoolPanelProps {
  open: boolean
  activeSchoolId: string
  schools: SchoolInfoDTO[]
  loading: boolean
  search: string
  onSearchChange: (value: string) => void
  onSelect: (school: SchoolInfoDTO) => void
  onClose: () => void
  teacherDisplayName: string
  teacherUsername?: string
  teacherInfoError?: string
}

export function SchoolPanel({
  open,
  activeSchoolId,
  schools,
  loading,
  search,
  onSearchChange,
  onSelect,
  onClose,
  teacherDisplayName,
  teacherUsername,
  teacherInfoError,
}: SchoolPanelProps): JSX.Element | null {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-30">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="overflow-hidden relative w-11/12 max-w-sm h-full bg-white rounded-r-3xl shadow-2xl">
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 pb-10 pt-12 rounded-br-[48px]">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-white/80">当前用户</p>
              <p className="mt-1 text-2xl font-semibold">{teacherDisplayName}</p>
              {teacherUsername && (
                <p className="mt-1 text-xs text-white/70">账号：{teacherUsername}</p>
              )}
              {teacherInfoError && (
                <p className="mt-1 text-xs text-white/70">{teacherInfoError}</p>
              )}
            </div>
            <button
              type="button"
              className="text-white/80"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.59-9.41a1 1 0 10-1.41 1.41L8.59 10l-1.6 1.59a1 1 0 101.42 1.41L10 11.41l1.59 1.6a1 1 0 001.41-1.42L11.42 10l1.58-1.59a1 1 0 00-1.41-1.41L10 8.59 8.41 7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-5 -mt-6">
          <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                onSearchChange(event.target.value)
              }}
              placeholder="搜索园所"
              className="ml-2 w-full text-sm text-gray-700 bg-transparent placeholder:text-gray-400 focus:outline-none"
            />
            {search && (
              <button
                type="button"
                className="text-gray-400"
                onClick={() => onSearchChange('')}
              >
                ×
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 h-[60%] overflow-y-auto px-5 pb-8">
          {loading && <p className="py-3 text-sm text-gray-400">园所列表加载中...</p>}
          {!loading && schools.length === 0 && (
            <p className="py-3 text-sm text-gray-400">未找到匹配的园所</p>
          )}
          <div className="space-y-3">
            {schools.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(item)}
                className={`w-full rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
                  item.id === activeSchoolId
                    ? 'border-orange-200 bg-orange-50'
                    : 'border-gray-100 bg-white hover:border-orange-100'
                }`}
              >
                <div className="flex justify-between items-center">
                  <p className="text-base font-semibold text-gray-900">
                    {item.name || '未命名园所'}
                  </p>
                  {item.id === activeSchoolId && (
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L7.75 12.836l7.543-7.543a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  {item.address || '暂无地址信息'}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

