import { useCallback, useEffect, useMemo, useState } from 'react'
import { ReactJsonServiceClient } from '@/api/react-client'
import { GetSchoolInfosReq, GetSchoolInfosRes } from '@/api/teacher.dtos'
import { GetSchoolBaseInfoReq, GetSchoolBaseInfoRes } from '@/api/school.dtos'
import {
  getSchoolInfo,
  getSchoolId,
  saveSchoolInfo,
  setSchoolId,
  type SchoolInfo,
} from '../lib/auth'
import { SchoolInfoDTO } from '@/api/base.dtos'

export interface UseSchoolDataResult {
  schoolInfo: SchoolInfo | null
  activeSchoolId: string
  schoolInfos: SchoolInfoDTO[]
  schoolInfosLoading: boolean
  schoolInfosError: string
  schoolPanelOpen: boolean
  setSchoolPanelOpen: (open: boolean) => void
  schoolSearch: string
  setSchoolSearch: (value: string) => void
  filteredSchools: SchoolInfoDTO[]
  handleSchoolChange: (school?: SchoolInfoDTO) => void
  refreshSchoolInfos: () => Promise<void>
}

export function useSchoolData(): UseSchoolDataResult {
  const cached = getSchoolInfo()
  const [schoolInfo, setSchoolInfo] = useState<SchoolInfo | null>(cached)
  const [activeSchoolId, setActiveSchoolId] = useState<string>(
    cached?.schoolId || getSchoolId() || ''
  )
  const [schoolInfos, setSchoolInfos] = useState<SchoolInfoDTO[]>([])
  const [schoolInfosLoading, setSchoolInfosLoading] = useState<boolean>(false)
  const [schoolInfosError, setSchoolInfosError] = useState<string>('')
  const [schoolPanelOpen, setSchoolPanelOpen] = useState<boolean>(false)
  const [schoolSearch, setSchoolSearch] = useState<string>('')

  const handleSchoolChange = useCallback((school?: SchoolInfoDTO): void => {
    if (!school?.id) return
    setActiveSchoolId(school.id)
    setSchoolId(school.id)
    const info: SchoolInfo = {
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

  const fetchSchoolInfos = useCallback(async (): Promise<void> => {
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

      const list: SchoolInfoDTO[] = response?.data ?? []
      setSchoolInfos(list)

      if (list.length > 0) {
        const exists = list.find((item) => item.id === activeSchoolId)
        const fallbackId = list[0]?.id ?? ''
        const nextId = exists ? activeSchoolId : fallbackId

        if (nextId && nextId !== activeSchoolId) {
          const nextSchool = list.find((item) => item.id === nextId)
          handleSchoolChange(nextSchool)
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

  useEffect((): void => {
    if (!activeSchoolId) return
    const cachedInfo = getSchoolInfo()

    if (cachedInfo?.schoolId === activeSchoolId && cachedInfo.schoolName) {
      setSchoolInfo(cachedInfo)
      return
    }

    const client = new ReactJsonServiceClient()
    const request = new GetSchoolBaseInfoReq({ schoolId: activeSchoolId })
    client
      .send<GetSchoolBaseInfoRes>({ request, auth: true })
      .then((response: GetSchoolBaseInfoRes): void => {
        if (response.code === 200 && response.data) {
          const newSchoolInfo: SchoolInfo = {
            schoolId: activeSchoolId,
            schoolName: response.data.name || '',
            logo: response.data.logoUrl,
            pointName: response.data.pointName,
          }
          saveSchoolInfo(newSchoolInfo)
          setSchoolInfo(newSchoolInfo)
        }
      })
      .catch((error: unknown): void => {
        console.error('获取学校基础信息失败:', error)
      })
  }, [activeSchoolId])

  useEffect((): void => {
    fetchSchoolInfos()
  }, [fetchSchoolInfos])

  const filteredSchools = useMemo((): SchoolInfoDTO[] => {
    if (!schoolSearch.trim()) return schoolInfos
    return schoolInfos.filter((item) =>
      (item.name || '').toLowerCase().includes(schoolSearch.trim().toLowerCase())
    )
  }, [schoolInfos, schoolSearch])

  return {
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
    refreshSchoolInfos: fetchSchoolInfos,
  }
}

