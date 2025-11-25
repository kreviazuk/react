import type { AuthenticateResponse } from "./auth.dtos";

export interface LoginPayload {
  appId: string;
  code: string;
  state?: string;
  schoolId: string;
}

export default class CommonServer {
  static promise: Promise<any> | undefined = undefined;
  static cache: any = undefined;

  /**
   * 登录接口请求token与userInfo
   * @param data
   * 入参  code:"021gj0OV1om5PU0k9VNV1VMQNV1gj0OK"
   * 返回  {
   *          accessToken:'xxx',
   *          refreshToken:'xxx',
   *          userInfo:{}
   *       }
   */
  static async login(data: {
    code: string;
    state: string;
    appId: string;
    schoolId: string;
    xAppId: number;
  }) {
    if (typeof this.cache !== "undefined") {
      return this.cache;
    }

    if (this.promise) {
      return await this.promise;
    }
    // data.provider = "wechat";
    const promise = new Promise(async (resolve, reject) => {
      await uni.request({
        method: "GET",
        url: `${
          import.meta.env.VITE_APP_WECHAT_AUTH_API_URL
        }mp/api/auth?provider=wechat&wxcomponentsappid=${
          import.meta.env.VITE_APP_WX_COMPONENT_APPID
        }&code=${data.code}&appId=${data.appId}&schoolId=${
          data.schoolId
        }&state=${data.state}&wx3rdcloud=1&ish5=1`,
        header: {
          "x-appid": data.xAppId ?? 1,
        },
        success: (res: UniApp.RequestSuccessCallbackResult) => {
          resolve(res.data);
        },
        fail: (res: UniApp.GeneralCallbackResult) => {
          reject(res);
        },
      });
    });
    promise.finally(() => {
      this.promise = undefined;
    });
    this.promise = promise;
    const res = await promise;
    this.cache = res;

    setTimeout(() => {
      // 1秒后清除缓存
      this.cache = undefined;
    }, 1000);
    return res;
  }

  static async getMPJsapiInfo(data: any) {
    const res: any = await new Promise(async (resolve, reject) => {
      await uni.request({
        //url: '/mp/api/auth',
        url: `${
          import.meta.env.VITE_APP_WECHAT_AUTH_API_URL
        }mp/api/wechat/mpjsapiinfo`,
        data: data,
        method: "POST",
        success: (res: UniApp.RequestSuccessCallbackResult) => {
          resolve(res.data);
        },
        fail: (res: UniApp.GeneralCallbackResult) => {
          reject(res);
        },
      });
    });

    return res;
  }

    static async mpLogin(data: LoginPayload) {
    const res = await new Promise<AuthenticateResponse | string>(
      (resolve, reject) => {
        uni.request({
          method: "GET",
          url: `${
            import.meta.env.VITE_APP_WECHAT_AUTH_API_URL
          }mp/api/auth?provider=wechat&wxcomponentsappid=${
            import.meta.env.VITE_APP_WX_MP_COMPONENT_APPID
          }&code=${data.code}&appId=${data.appId}&schoolId=${
            data.schoolId
          }&wx3rdcloud=1`,
          header: {
            "x-appid": 1,
          },
          success: (res: UniApp.RequestSuccessCallbackResult) => {
            resolve(res.data as AuthenticateResponse | string);
          },
          fail: (res: UniApp.GeneralCallbackResult) => {
            reject(res);
          },
        });
      }
    );

    return res;
  }
}
