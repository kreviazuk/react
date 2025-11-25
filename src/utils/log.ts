/**
 * @file 封装日志
 */

const VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0'

// H5 环境下使用 console
const logger = {
  debug: (...args: unknown[]) => console.debug(...args),
  log: (...args: unknown[]) => console.log(...args),
  warn: (...args: unknown[]) => console.warn(...args),
  error: (...args: unknown[]) => console.error(...args),
}

const realtimeLogger = null

/**
 * 格式化时间
 */
export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}

/**
 * 日志只打印到本地，不上传到服务器
 */
export function DEBUG(file: string, ...args: unknown[]) {
  console.debug(`[${VERSION}]`, file, ' | ', ...args)
  logger?.debug(`[${VERSION}]`, file, ' | ', ...args)
}

/**
 * 运行日志
 */
export function RUN(file: string, ...args: unknown[]) {
  console.log(`[${VERSION}]`, file, ' | ', ...args)
  logger?.log(`[${VERSION}]`, file, ' | ', ...args)
}

/**
 * 错误日志
 */
export function ERROR(file: string, ...args: unknown[]) {
  console.error(`[${VERSION}]`, file, ' | ', ...args)
  logger?.warn(`[${VERSION}]`, file, ' | ', ...args)
}

export function getLogger(fileName: string) {
  return {
    DEBUG: function (...args: unknown[]) {
      DEBUG(fileName, ...args)
    },
    RUN: function (...args: unknown[]) {
      RUN(fileName, ...args)
    },
    ERROR: function (...args: unknown[]) {
      ERROR(fileName, ...args)
    },
  }
}
