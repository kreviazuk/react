/**
 * 系统信息工具
 * 兼容微信小程序新旧API
 */

export interface SystemInfo {
  // 设备信息
  brand?: string;
  model?: string;
  system?: string;
  platform?: string;
  
  // 窗口信息
  windowWidth?: number;
  windowHeight?: number;
  statusBarHeight?: number;
  safeArea?: any;
  
  // 应用信息
  version?: string;
  SDKVersion?: string;
  
  // 其他
  pixelRatio?: number;
  screenWidth?: number;
  screenHeight?: number;
}

/**
 * 获取系统信息 - 兼容新旧API
 */
export function getSystemInfo(): SystemInfo {
  try {
    // 优先使用新的API
    if (typeof wx !== 'undefined') {
      const deviceInfo = wx.getDeviceInfo?.() || {};
      const windowInfo = wx.getWindowInfo?.() || {};
      const appBaseInfo = wx.getAppBaseInfo?.() || {};
      
      return {
        // 设备信息
        brand: deviceInfo.brand,
        model: deviceInfo.model,
        system: deviceInfo.system,
        platform: deviceInfo.platform,
        
        // 窗口信息
        windowWidth: windowInfo.windowWidth,
        windowHeight: windowInfo.windowHeight,
        statusBarHeight: windowInfo.statusBarHeight,
        safeArea: windowInfo.safeArea,
        pixelRatio: windowInfo.pixelRatio,
        screenWidth: windowInfo.screenWidth,
        screenHeight: windowInfo.screenHeight,
        
        // 应用信息
        version: appBaseInfo.version,
        SDKVersion: appBaseInfo.SDKVersion,
      };
    }
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get system info with new APIs:', error);
  }

  // 降级到uni-app的API
  try {
    return uni.getSystemInfoSync();
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get system info with uni API:', error);
    return {};
  }
}

/**
 * 获取设备信息
 */
export function getDeviceInfo() {
  try {
    if (typeof wx !== 'undefined' && wx.getDeviceInfo) {
      return wx.getDeviceInfo();
    }
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get device info:', error);
  }
  
  // 从完整的系统信息中提取设备信息
  const systemInfo = getSystemInfo();
  return {
    brand: systemInfo.brand,
    model: systemInfo.model,
    system: systemInfo.system,
    platform: systemInfo.platform,
  };
}

/**
 * 获取窗口信息
 */
export function getWindowInfo() {
  try {
    if (typeof wx !== 'undefined' && wx.getWindowInfo) {
      return wx.getWindowInfo();
    }
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get window info:', error);
  }
  
  // 从完整的系统信息中提取窗口信息
  const systemInfo = getSystemInfo();
  return {
    windowWidth: systemInfo.windowWidth,
    windowHeight: systemInfo.windowHeight,
    statusBarHeight: systemInfo.statusBarHeight,
    safeArea: systemInfo.safeArea,
    pixelRatio: systemInfo.pixelRatio,
    screenWidth: systemInfo.screenWidth,
    screenHeight: systemInfo.screenHeight,
  };
}

/**
 * 获取应用基础信息
 */
export function getAppBaseInfo() {
  try {
    if (typeof wx !== 'undefined' && wx.getAppBaseInfo) {
      return wx.getAppBaseInfo();
    }
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get app base info:', error);
  }
  
  // 从完整的系统信息中提取应用信息
  const systemInfo = getSystemInfo();
  return {
    version: systemInfo.version,
    SDKVersion: systemInfo.SDKVersion,
  };
}

/**
 * 获取系统设置
 */
export function getSystemSetting() {
  try {
    if (typeof wx !== 'undefined' && wx.getSystemSetting) {
      return wx.getSystemSetting();
    }
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get system setting:', error);
  }
  
  return {};
}

/**
 * 获取应用授权设置
 */
export function getAppAuthorizeSetting() {
  try {
    if (typeof wx !== 'undefined' && wx.getAppAuthorizeSetting) {
      return wx.getAppAuthorizeSetting();
    }
  } catch (error) {
    console.warn('[SYSTEM_INFO] Failed to get app authorize setting:', error);
  }
  
  return {};
} 