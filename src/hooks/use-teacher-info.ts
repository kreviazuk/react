import { useCallback, useEffect, useMemo, useState } from 'react'
import { ReactJsonServiceClient } from '@/api/react-client'
import {
  GetTeacherMyUserInfoReq,
  GetTeacherMyUserInfoRes,
  TeacherMyUserInfo,
} from '@/api/teacher.dtos'

export interface UseTeacherInfoResult {
  teacherInfo: TeacherMyUserInfo | null
  teacherInfoError: string
  teacherDisplayName: string
  refreshTeacherInfo: () => Promise<void>
}

export function useTeacherInfo(): UseTeacherInfoResult {
  const [teacherInfo, setTeacherInfo] = useState<TeacherMyUserInfo | null>(null)
  const [teacherInfoError, setTeacherInfoError] = useState<string>('')

  const fetchTeacherInfo = useCallback(async (): Promise<void> => {
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

  useEffect((): void => {
    fetchTeacherInfo()
  }, [fetchTeacherInfo])

  const teacherDisplayName = useMemo((): string => {
    return (
      teacherInfo?.fullname ||
      teacherInfo?.displayname ||
      teacherInfo?.nickname ||
      teacherInfo?.username ||
      '园务老师'
    )
  }, [teacherInfo])

  return {
    teacherInfo,
    teacherInfoError,
    teacherDisplayName,
    refreshTeacherInfo: fetchTeacherInfo,
  }
}

