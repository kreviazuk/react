/* eslint-disable @typescript-eslint/no-explicit-any */
let callbackId = 1;

type yoyoJsBridgeMethodParams = { method: string; data: any };

export type IGetUserinfoResp = IGetTeacherInfoResp | IGetParentInfoResp;
export interface IGetBaseUserInfoResp {
  appid: number;
  schoolid: string;
  userid: number;
}
export interface IGetTeacherInfoResp extends IGetBaseUserInfoResp {
  authmeta: string;
}
export interface IGetParentInfoResp extends IGetTeacherInfoResp {
  kidid: string;
  username: string;
}

const yoyoJsBridgeMethod = (config: yoyoJsBridgeMethodParams) => {
  // console.log("typeof", typeof window.yoyoJsBridge);
  // console.log("window", window.yoyoJsBridge);
  return new Promise<any>((resolve, reject) => {
    if (
      typeof window.yoyoJsBridge === "undefined" &&
      typeof window.flutter_inappwebview === "undefined"
    ) {
      reject("not in yoyo app");
      return;
    }
    const { method } = config;
    const callbackName = `__yoyo_native_callback_${method}_${callbackId++}__`;
    // 注册全局回调函数
    // @ts-expect-error 元素隐式具有 "any" 类型，因为索引表达式的类型不为 "number"
    window[callbackName] = function (args: any) {
      // console.log("args", typeof args);
      // console.log("args", args);
      resolve(args);
      // @ts-expect-error 元素隐式具有 "any" 类型，因为索引表达式的类型不为 "number"
      delete window[callbackName];
    };
    try {
      if (typeof window.flutter_inappwebview !== "undefined") {
        window.flutter_inappwebview.callHandler(
          "yoyoJsBridge",
          JSON.stringify({
            ...config,
            callback: callbackName,
          })
        );
      } else {
        window.yoyoJsBridge.postMessage(
          JSON.stringify({
            ...config,
            callback: callbackName,
          })
        );
      }
    } catch (err) {
      reject(err);
    }
  });
};

const toJSON = (str: string) => {
  const test = /([^{}:,\s]+)/gm;
  const val = str.replace(test, '"$1"');
  return JSON.parse(val);
};

const yoyoNativeSDK = {
  // 封装toast
  toast: (data: any) =>
    yoyoJsBridgeMethod({
      method: "yo_toast",
      data,
    }),
  openWeChatApp: () =>
    yoyoJsBridgeMethod({
      method: "yo_openWeChatApp",
      data: {},
    }),
  /**
  分享链接：
  shareUrl  目标url
  shareTitle 分享标题
  shareDesc  分享描述
  shareThumbnailUrl  缩略图URL
  shareScene  分享方式  SESSION  好友会话   TIMELINE 朋友圈
  */
  shareWeChatLink: (data: any) =>
    yoyoJsBridgeMethod({
      method: "yo_shareWeChatLink",
      data,
    }),

  /**
  分享图片：
  shareUrl  大图URL
  shareTitle 分享标题
  shareDesc  分享描述
  shareThumbnailUrl  缩略图URL
  shareScene  分享方式  SESSION  好友会话   TIMELINE 朋友圈
  */
  shareWeChatImage: (data: any) =>
    yoyoJsBridgeMethod({
      method: "yo_shareWeChatImage",
      data,
    }),
  launchWeChatMiniProgram: ({ appId, path }: { appId: string; path: string }) =>
    yoyoJsBridgeMethod({
      method: "yo_launchWeChatMiniProgram",
      data: { username: appId, path },
    }),
  closeWebview: () =>
    yoyoJsBridgeMethod({
      method: "yo_closeWebview",
      data: {},
    }),
  publishFeed: () =>
    yoyoJsBridgeMethod({
      method: "yo_publishFeed",
      data: {},
    }),
  gotoPage: (data: any) =>
    yoyoJsBridgeMethod({
      method: "yo_gotoPage",
      data,
    }),
  nativeLogin: () =>
    yoyoJsBridgeMethod({
      method: "yo_login",
      data: {},
    }),
  nativeLogout: () =>
    yoyoJsBridgeMethod({
      method: "yo_logout",
      data: {},
    }),

  /**
   * 获取App Token
   * @returns string
   */
  getToken: () =>
    yoyoJsBridgeMethod({
      method: "yo_getToken",
      data: {},
    }).then((res) => {
      if (typeof res === "string") {
        return res;
      }
      return null;
    }),
  /**
   * 获取App用户信息
   * teacher
   * 'appid': '${Get.find<AppConfig>().appId}',
   * 'schoolid': '${Get.find<UserRepository>().getCurrentSchoolId()}',
   * 'userid': '${Get.find<UserRepository>().getUserId()}'
   * 'authmeta': '${Get.find<UserRepository>().getAuthMeta()}'
   * "621f6a55f7d15d3cd17e8a36@620e166ae157310ad1e7f120"
   *
   * parent
   * 'appid': '${BaseConstant.appId}',
   * 'schoolid': '${CommonUtil.getCurrentSchoolId()}',
   * 'kidid': '${CommonUtil.getCurrentKidId()}',
   * 'username': '${UserRepository.getInstance()!.getUserName()}',
   * 'userid': '${UserRepository.getInstance()!.getUserId()}'
   */
  getUserinfo: () =>
    yoyoJsBridgeMethod({
      method: "yo_getUserinfo",
      data: {},
    }).then((res) => {
      if (typeof res === "string") {
        return toJSON(res) as IGetUserinfoResp;
      }
      return null;
    }),
  /**
   * 二维码扫描
   * @returns string
   */
  qrScan: () =>
    yoyoJsBridgeMethod({
      method: "yo_qrscan",
      data: {},
    }).then((res) => {
      if (typeof res === "string") {
        return res;
      }
      return null;
    }),
};

export default yoyoNativeSDK;
