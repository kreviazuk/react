import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useSchoolData } from '@/hooks/use-schools'
import { useTeacherInfo } from '@/hooks/use-teacher-info'
import { SchoolPanel } from '@/components/school-panel'

export const Route = createFileRoute('/')({
  component: Home,
})

interface FeatureItem {
  name: string
  icon: string
  color: string
}

interface StatItem {
  label: string
  value: number
  color: string
}

interface TodoItem {
  type: string
  content: string
  color: string
}

function Home(): JSX.Element {
  const {
    schoolInfo,
    activeSchoolId,
    schoolInfos,
    schoolInfosLoading,
    schoolInfosError,
    schoolPanelOpen,
    setSchoolPanelOpen,
    schoolSearch,
    setSchoolSearch,
    filteredSchools,
    handleSchoolChange,
    refreshSchoolInfos,
  } = useSchoolData()
  const {
    teacherInfo,
    teacherInfoError,
    teacherDisplayName,
    refreshTeacherInfo,
  } = useTeacherInfo()
  const [currentDate, setCurrentDate] = useState<string>('')

  useEffect((): void => {
    const date = new Date()
    const formatted = new Intl.DateTimeFormat('zh-CN', {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }).format(date)
    setCurrentDate(formatted)
  }, [])

  useEffect((): void => {
    refreshTeacherInfo()
  }, [refreshTeacherInfo])

  // Mock Data for UI
  const features: readonly FeatureItem[] = [
    { name: '园所报表', icon: '📊', color: 'text-green-500' },
    { name: '幼儿手环', icon: '⌚', color: 'text-pink-400' },
    { name: '线索管理', icon: '📝', color: 'text-purple-500' },
    { name: '跟进管理', icon: '📋', color: 'text-blue-500' },
    { name: '微官网', icon: '🌐', color: 'text-purple-600' },
    { name: '校园公众号', icon: '📰', color: 'text-indigo-500' },
    { name: '海报工厂', icon: '🖼️', color: 'text-purple-400' },
    { name: '员工管理', icon: '👥', color: 'text-blue-400' },
    { name: '班级管理', icon: '🏫', color: 'text-blue-600' },
    { name: '全部', icon: '⚡', color: 'text-gray-400' },
  ]

  const stats: readonly StatItem[] = [
    { label: '所有宝宝', value: 39, color: 'text-gray-700' },
    { label: '已入园', value: 0, color: 'text-green-500' },
    { label: '未入园', value: 39, color: 'text-orange-400' },
    { label: '已离园', value: 0, color: 'text-blue-400' },
    { label: '动态总数', value: 0, color: 'text-pink-400' },
    { label: '晨检异常', value: 0, color: 'text-red-500' },
    { label: '用药申请', value: 0, color: 'text-purple-500' },
    { label: '请假中', value: 0, color: 'text-blue-500' },
  ]

  const todos: readonly TodoItem[] = [
    { type: '校务', content: '今日有班级未发布营养健康...', color: 'bg-blue-400' },
    { type: '校务', content: '机构当前未创建本周带量食谱', color: 'bg-blue-400' },
    { type: '校务', content: '有73个学员需通知续费', color: 'bg-blue-400' },
    { type: '校务', content: '有14个班级未排课', color: 'bg-blue-400' },
    { type: '销售', content: '有7条线索7天以上未跟进', color: 'bg-purple-400' },
  ]

  return (
    <div className="pb-20 min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex sticky top-0 z-10 justify-between items-center px-4 py-3 bg-white shadow-sm">
        <div className="flex relative items-center space-x-2">
          <div className="p-1 bg-yellow-200 rounded-full">
            <span className="text-lg">🦒</span>
          </div>
          <button
            type="button"
            className="flex items-center text-lg font-bold text-left text-gray-800"
            onClick={() => setSchoolPanelOpen(true)}
          >
            {schoolInfo?.schoolName || '选择园所'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 w-5 h-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

        </div>
        <button className="text-gray-600" aria-label="open-menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </header>

      {/* Features Grid */}
      <div className="p-4 mb-2 bg-white">
        <div className="grid grid-cols-5 gap-x-2 gap-y-4">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-gray-50 ${item.color}`}>
                {item.icon}
              </div>
              <span className="text-xs text-center text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Date & Refresh */}
        <div className="p-4 bg-white rounded-xl shadow-sm">
          <div className="flex justify-between items-center pb-2 mb-4 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-800">{currentDate}</h2>
            <button className="flex items-center text-sm text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              刷新
            </button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-y-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                 <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                 <span className="mt-1 text-xs text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Todos */}
        <div className="p-4 rounded-xl border border-blue-100 shadow-sm bg-blue-50/50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-gray-800">今日待办({todos.length})</h3>
            <button className="flex items-center text-xs text-gray-500">
              查看全部
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {todos.map((todo, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex flex-1 items-start space-x-2">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full ${todo.color} text-white text-xs flex items-center justify-center font-medium`}>
                    {todo.type}
                  </span>
                  <span className="pt-1 pr-2 text-sm text-gray-700 truncate">
                    {todo.content}
                  </span>
                </div>
                <button className="flex items-center pt-1 text-sm text-blue-500 whitespace-nowrap">
                  去处理
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* School infos debug panel */}
        <div className="p-4 bg-white rounded-xl border border-gray-200 border-dashed shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-base font-semibold text-gray-900">
                园所接口数据
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                GetSchoolInfosReq
              </p>
            </div>
            <button
              type="button"
              onClick={refreshSchoolInfos}
              disabled={schoolInfosLoading}
              className="px-3 py-1 text-xs text-gray-600 rounded-full border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {schoolInfosLoading ? '拉取中...' : '重新拉取'}
            </button>
          </div>
          {schoolInfosError && (
            <p className="mt-3 text-sm text-red-500">{schoolInfosError}</p>
          )}
          {!schoolInfosError && (
            <div className="mt-3 space-y-3">
              {schoolInfosLoading && (
                <p className="text-sm text-gray-500">数据加载中...</p>
              )}
              {!schoolInfosLoading && schoolInfos.length === 0 && (
                <p className="text-sm text-gray-500">暂无返回数据</p>
              )}
              {!schoolInfosLoading && schoolInfos.length > 0 && (
                <>
                  <div className="space-y-3">
                    {schoolInfos.slice(0, 3).map((info) => (
                      <div
                        key={info.id || info.name}
                        className="px-3 py-2 rounded-lg border border-gray-100"
                      >
                        <p className="text-sm font-semibold text-gray-900">
                          {info.name || '未命名园所'}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          ID: {info.id || '暂无'}
                        </p>
                        {info.province && (
                          <p className="mt-1 text-xs text-gray-500">
                            {info.province}
                            {info.city ? `·${info.city}` : ''}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="overflow-auto p-3 max-h-64 bg-gray-50 rounded-xl">
                    <pre className="text-[10px] leading-4 text-gray-700 whitespace-pre-wrap break-all font-mono">
                      {JSON.stringify(schoolInfos.slice(0, 3), null, 2)}
                    </pre>
                  </div>
                  <p className="text-xs text-gray-400">
                    共返回 {schoolInfos.length} 条数据，以上展示前 3 条及原始 JSON。
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <SchoolPanel
        open={schoolPanelOpen}
        activeSchoolId={activeSchoolId}
        schools={filteredSchools}
        loading={schoolInfosLoading}
        search={schoolSearch}
        onSearchChange={setSchoolSearch}
        onSelect={handleSchoolChange}
        onClose={() => setSchoolPanelOpen(false)}
        teacherDisplayName={teacherDisplayName}
        teacherUsername={teacherInfo?.username}
        teacherInfoError={teacherInfoError}
      />
    </div>
  )
}
