import { createFileRoute } from '@tanstack/react-router'
import { getSchoolInfo, getSchoolId, saveSchoolInfo } from '../lib/auth'
import { useState, useEffect } from 'react'
import { ReactJsonServiceClient } from '@/api/react-client'
import { GetSchoolBaseInfoReq, GetSchoolBaseInfoRes } from '@/api/school.dtos'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [schoolInfo, setSchoolInfo] = useState(getSchoolInfo())
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Date()
    const formatted = new Intl.DateTimeFormat('zh-CN', {
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    }).format(date)
    setCurrentDate(formatted)

    // School Info Fetch Logic
    const schoolId = getSchoolId()
    const cached = getSchoolInfo()
    
    if (schoolId && !cached?.schoolName) {
      const client = new ReactJsonServiceClient()
      const request = new GetSchoolBaseInfoReq({ schoolId })
      client.send<GetSchoolBaseInfoRes>({ request, auth: true })
        .then(response => {
          if (response.code === 200 && response.data) {
            const newSchoolInfo = {
              schoolId,
              schoolName: response.data.name || '',
              logo: response.data.logoUrl,
              pointName: response.data.pointName,
            }
            saveSchoolInfo(newSchoolInfo)
            setSchoolInfo(newSchoolInfo)
          }
        })
        .catch(console.error)
    }
  }, [])

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
        <div className="flex items-center space-x-2">
           <div className="bg-yellow-200 rounded-full p-1">
             {/* Logo Placeholder */}
             <span className="text-lg">🦒</span>
           </div>
           <h1 className="text-lg font-bold text-gray-800 flex items-center">
             {schoolInfo?.schoolName || '优必思教育机构'}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
             </svg>
           </h1>
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
      </div>
    </div>
  )
}
