export default {
  isWeiXin() {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("micromessenger") > 0;
// #else
	return false;
// #endif
  },

  isAlipay() {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("aliapp") > 0 || ua.indexOf("alipay") > 0;
// #else
	return false;
// #endif
  },

  isMobile() {
// #ifdef H5
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(
      navigator.userAgent
    );
// #else
	return false;
// #endif
  },
  isYoyoApp: () => {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/yoyoparent/i) || ua.match(/yoyoteacher/i);
    // return ua.match(/XM_b\(iOS/i) || ua.match(/xiaomai_android/i); // IOS 字符串变化
// #else
	return false;
// #endif
  },

  isYoyoParentApp: () => {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/yoyoparent/i);
// #else
	return false;
// #endif
  },

  isYoyoTeacherApp: () => {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/yoyoteacher/i);
// #else
	return false;
// #endif
  },

  isAndroid() {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return /android/i.test(ua);
// #else
	return false;
// #endif
  },
  isIOS() {
// #ifdef H5
    const ua = navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/i.test(ua);
// #else
	return false;
// #endif
  },
};
