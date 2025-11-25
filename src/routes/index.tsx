import { createFileRoute } from '@tanstack/react-router'
import { getSchoolInfo, getSchoolId, saveSchoolInfo, setSchoolId } from '../lib/auth'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { ReactJsonServiceClient } from '@/api/react-client'
import { GetSchoolBaseInfoReq, GetSchoolBaseInfoRes } from '@/api/school.dtos'
import {
  GetSchoolInfosReq,
  GetSchoolInfosRes,
  GetTeacherMyUserInfoReq,
  GetTeacherMyUserInfoRes,
  TeacherMyUserInfo,
} from '@/api/teacher.dtos'
import { SchoolInfoDTO } from '@/api/base.dtos'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [schoolInfo, setSchoolInfo] = useState(getSchoolInfo())
  const [activeSchoolId, setActiveSchoolId] = useState(
    getSchoolInfo()?.schoolId || getSchoolId() || ''
  )
  const [currentDate, setCurrentDate] = useState('')
  const [schoolInfos, setSchoolInfos] = useState<SchoolInfoDTO[]>([])
  const [schoolInfosLoading, setSchoolInfosLoading] = useState(false)
  const [schoolInfosError, setSchoolInfosError] = useState('')
  const [schoolPanelOpen, setSchoolPanelOpen] = useState(false)
  const [schoolSearch, setSchoolSearch] = useState('')
  const [teacherInfo, setTeacherInfo] = useState<TeacherMyUserInfo | null>(null)
  const [teacherInfoError, setTeacherInfoError] = useState('')

  useEffect(() => {
    const date = new Date()
    const formatted = new Intl.DateTimeFormat('zh-CN', {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    }).format(date)
    setCurrentDate(formatted)
  }, [])

  const handleSchoolChange = useCallback((school?: SchoolInfoDTO) => {
    if (!school?.id) return
    setActiveSchoolId(school.id)
    setSchoolId(school.id)
    const info = {
      schoolId: school.id,
      schoolName: school.name || '',
      logo: school.logoUrl,
      pointName: school.address,
    }
    saveSchoolInfo(info)
    setSchoolInfo(info)
    setSchoolPanelOpen(false)
    setSchoolSearch('')
  }, [])

  const fetchSchoolInfos = useCallback(async function fetchSchoolInfosHandler() {
    setSchoolInfosLoading(true)
    setSchoolInfosError('')
    try {
      const client = new ReactJsonServiceClient()
      const request = new GetSchoolInfosReq({ dataOnly: true })
      const response = await client.send<GetSchoolInfosRes>({
        request,
        auth: true,
      })

      if (response?.ret === false) {
        setSchoolInfosError(response.message || '获取园所列表失败')
        setSchoolInfos([])
        return
      }

      const list = response?.data ?? []
      setSchoolInfos(list)

      if (list.length > 0) {
        const exists = list.find((item) => item.id === activeSchoolId)
        const fallbackId = list[0]?.id ?? ''
        const nextId = exists ? activeSchoolId : fallbackId

        if (nextId && nextId !== activeSchoolId) {
          handleSchoolChange(list.find((item) => item.id === nextId))
        }
      }
    } catch (error) {
      setSchoolInfosError(
        error instanceof Error ? error.message : '获取园所列表失败'
      )
      setSchoolInfos([])
    } finally {
      setSchoolInfosLoading(false)
    }
  }, [activeSchoolId, handleSchoolChange])

  const fetchTeacherInfo = useCallback(async function fetchTeacherInfoHandler() {
    try {
      setTeacherInfoError('')
      const client = new ReactJsonServiceClient()
      const request = new GetTeacherMyUserInfoReq({})
      const response = await client.send<GetTeacherMyUserInfoRes>({
        request,
        auth: true,
      })

      if (response?.ret === false) {
        setTeacherInfoError('无法获取教师信息')
        setTeacherInfo(null)
        return
      }

      setTeacherInfo(response?.data ?? null)
    } catch (error) {
      setTeacherInfoError(
        error instanceof Error ? error.message : '无法获取教师信息'
      )
      setTeacherInfo(null)
    }
  }, [])

  useEffect(() => {
    fetchTeacherInfo()
  }, [fetchTeacherInfo])

  useEffect(() => {
    if (!activeSchoolId) return
    const cached = getSchoolInfo()

    if (cached?.schoolId === activeSchoolId && cached.schoolName) {
      setSchoolInfo(cached)
      return
    }

    const client = new ReactJsonServiceClient()
    const request = new GetSchoolBaseInfoReq({ schoolId: activeSchoolId })
    client
      .send<GetSchoolBaseInfoRes>({ request, auth: true })
      .then((response) => {
        if (response.code === 200 && response.data) {
          const newSchoolInfo = {
            schoolId: activeSchoolId,
            schoolName: response.data.name || '',
            logo: response.data.logoUrl,
            pointName: response.data.pointName,
          }
          saveSchoolInfo(newSchoolInfo)
          setSchoolInfo(newSchoolInfo)
        }
      })
      .catch(console.error)
  }, [activeSchoolId])

  useEffect(() => {
    fetchSchoolInfos()
  }, [fetchSchoolInfos])

  const filteredSchools = useMemo(() => {
    if (!schoolSearch.trim()) return schoolInfos
    return schoolInfos.filter((item) =>
      (item.name || '').toLowerCase().includes(schoolSearch.trim().toLowerCase())
    )
  }, [schoolInfos, schoolSearch])

  const teacherDisplayName =
    teacherInfo?.fullname ||
    teacherInfo?.displayname ||
    teacherInfo?.nickname ||
    teacherInfo?.username ||
    '园务老师'

  // Mock Data for UI
  const features = [
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

  const stats = [
    { label: '所有宝宝', value: 39, color: 'text-gray-700' },
    { label: '已入园', value: 0, color: 'text-green-500' },
    { label: '未入园', value: 39, color: 'text-orange-400' },
    { label: '已离园', value: 0, color: 'text-blue-400' },
    { label: '动态总数', value: 0, color: 'text-pink-400' },
    { label: '晨检异常', value: 0, color: 'text-red-500' },
    { label: '用药申请', value: 0, color: 'text-purple-500' },
    { label: '请假中', value: 0, color: 'text-blue-500' },
  ]

  const todos = [
    { type: '校务', content: '今日有班级未发布营养健康...', color: 'bg-blue-400' },
    { type: '校务', content: '机构当前未创建本周带量食谱', color: 'bg-blue-400' },
    { type: '校务', content: '有73个学员需通知续费', color: 'bg-blue-400' },
    { type: '校务', content: '有14个班级未排课', color: 'bg-blue-400' },
    { type: '销售', content: '有7条线索7天以上未跟进', color: 'bg-purple-400' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="relative flex items-center space-x-2">
          <div className="bg-yellow-200 rounded-full p-1">
            <span className="text-lg">🦒</span>
          </div>
          <button
            type="button"
            className="text-left text-lg font-bold text-gray-800 flex items-center"
            onClick={() => setSchoolPanelOpen(true)}
          >
            {schoolInfo?.schoolName || '选择园所'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 text-gray-500"
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
        <button className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </header>

      {/* Features Grid */}
      <div className="bg-white p-4 mb-2">
        <div className="grid grid-cols-5 gap-y-4 gap-x-2">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-2xl bg-gray-50 ${item.color}`}>
                {item.icon}
              </div>
              <span className="text-xs text-gray-600 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Date & Refresh */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
            <h2 className="text-lg font-medium text-gray-800">{currentDate}</h2>
            <button className="flex items-center text-gray-500 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                 <span className="text-xs text-gray-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Todos */}
        <div className="bg-blue-50/50 rounded-xl p-4 shadow-sm border border-blue-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-gray-800">今日待办({todos.length})</h3>
            <button className="text-xs text-gray-500 flex items-center">
              查看全部
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            {todos.map((todo, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex items-start space-x-2 flex-1">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full ${todo.color} text-white text-xs flex items-center justify-center font-medium`}>
                    {todo.type}
                  </span>
                  <span className="text-sm text-gray-700 pt-1 truncate pr-2">
                    {todo.content}
                  </span>
                </div>
                <button className="text-blue-500 text-sm whitespace-nowrap pt-1 flex items-center">
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
        <div className="bg-white rounded-xl p-4 shadow-sm border border-dashed border-gray-200">
          <div className="flex items-center justify-between">
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
              onClick={fetchSchoolInfos}
              disabled={schoolInfosLoading}
              className="px-3 py-1 text-xs rounded-full border border-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {schoolInfosLoading ? '拉取中...' : '重新拉取'}
            </button>
          </div>
          {schoolInfosError && (
            <p className="text-sm text-red-500 mt-3">{schoolInfosError}</p>
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
                        className="rounded-lg border border-gray-100 px-3 py-2"
                      >
                        <p className="text-sm font-semibold text-gray-900">
                          {info.name || '未命名园所'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          ID: {info.id || '暂无'}
                        </p>
                        {info.province && (
                          <p className="text-xs text-gray-500 mt-1">
                            {info.province}
                            {info.city ? `·${info.city}` : ''}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3 max-h-64 overflow-auto">
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
      {schoolPanelOpen && (
        <div className="fixed inset-0 z-30">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setSchoolPanelOpen(false)}
          />
          <div className="relative h-full w-11/12 max-w-sm bg-white rounded-r-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 pb-10 pt-12 rounded-br-[48px]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/80">当前用户</p>
                  <p className="text-2xl font-semibold mt-1">{teacherDisplayName}</p>
                  {teacherInfo?.username && (
                    <p className="text-xs text-white/70 mt-1">
                      账号：{teacherInfo.username}
                    </p>
                  )}
                  {teacherInfoError && (
                    <p className="text-xs text-white/70 mt-1">{teacherInfoError}</p>
                  )}
                </div>
                <button
                  type="button"
                  className="text-white/80"
                  onClick={() => setSchoolPanelOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
              <div className="flex items-center bg-white rounded-full shadow-lg px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
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
                  value={schoolSearch}
                  onChange={(event) => setSchoolSearch(event.target.value)}
                  placeholder="搜索园所"
                  className="ml-2 w-full bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                />
                {schoolSearch && (
                  <button
                    type="button"
                    className="text-gray-400"
                    onClick={() => setSchoolSearch('')}
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="mt-6 h-[60%] overflow-y-auto px-5 pb-8">
              {schoolInfosLoading && (
                <p className="text-sm text-gray-400 py-3">园所列表加载中...</p>
              )}
              {!schoolInfosLoading && filteredSchools.length === 0 && (
                <p className="text-sm text-gray-400 py-3">未找到匹配的园所</p>
              )}
              <div className="space-y-3">
                {filteredSchools.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSchoolChange(item)}
                    className={`w-full rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
                      item.id === activeSchoolId
                        ? 'border-orange-200 bg-orange-50'
                        : 'border-gray-100 bg-white hover:border-orange-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-base font-semibold text-gray-900">
                        {item.name || '未命名园所'}
                      </p>
                      {item.id === activeSchoolId && (
                        <span className="text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    <p className="text-xs text-gray-500 mt-1">
                      {item.address || '暂无地址信息'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
