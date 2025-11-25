/**
 * 获取用户头像URL
 * @param logoUrl 原始头像URL
 * @returns 处理后的头像URL
 */
export function getAvatarUrl(logoUrl?: string): string {
  const defaultAvatar = "https://store.yban.co/avatar/user_avatar.jpg";
  
  if (!logoUrl || logoUrl === '') {
    return defaultAvatar;
  }
  
  // 如果已经是完整URL，直接返回
  if (logoUrl.startsWith('http')) {
    return logoUrl;
  }
  
  // 添加OSS样式参数
  return `${logoUrl}?x-oss-process=style/rule100`;
}

/**
 * 获取学校 logo URL
 * @param logoUrl 原始 logo URL
 * @returns 处理后的 logo URL
 */
export function getSchoolLogoUrl(logoUrl?: string): string {
  const defaultLogo = "https://store.yban.co/res/mp/teacher/img_banji.png";
  
  if (!logoUrl || logoUrl === '') {
    return defaultLogo;
  }
  
  // 如果已经是完整URL，直接返回
  if (logoUrl.startsWith('http')) {
    return logoUrl;
  }
  
  // 添加OSS样式参数，使用rule1500样式
  return `${logoUrl}?x-oss-process=style/rule1500`;
}

/**
 * 获取学生头像信息
 * @param studentData 学生数据对象
 * @returns 头像信息
 */
export function getStudentAvatar(studentData: any) {
  return {
    url: getAvatarUrl(studentData?.logoUrl),
    name: studentData?.name || '未知学生'
  };
} 