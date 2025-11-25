import { getCurrentInstance } from "vue";
import { storage } from "@/utils/Storage";
import { authUrlByComponent2, generateOAuthUrl } from "./wechat";
import qs from "qs";
import { showDialog } from "@/components/Dialog/dialog";
import { redirectTo } from "./navigate";

export function getParameterByName(name: string) {
  // #ifdef MP-WEIXIN
  const ret = getCurrentInstance()?.data[name] as string;
  return ret == null ? "" : decodeURIComponent(ret);
  // #endif

  // #ifdef H5
  // eslint-disable-next-line no-useless-escape
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let queryStr = "";
  if (location.search) {
    queryStr = location.search;
  } else {
    const w = location.hash.indexOf("?");
    queryStr = location.hash.substring(w);
  }
  const results = regex.exec(queryStr);
  return results == null ? "" : decodeURIComponent(results?.[1] || "");
  // #endif
}

const removeWxCodeParameters = (hash: string): string => {
  // 解决多次登录url添加重复的code与state问题
  const [path, queryStr] = hash.split("?");
  const urlParams = qs.parse(queryStr ?? "");
  if (queryStr && urlParams.code && urlParams.state) {
    delete urlParams.code;
    delete urlParams.state;
    delete urlParams.appid;
    const query = qs.stringify(urlParams);
    if (query.length) {
      return `${path}?${query}`;
    }
  }
  return hash;
};

const wxSuitId = getParameterByName("suite_id");
const corpId = getParameterByName("corpid");


if (wxSuitId && corpId) {
  const key = "wx_suitid_" + wxSuitId;
  storage.set(key, corpId);
}

if (corpId) {
  storage.set("wxcorpid", corpId);
}

if (wxSuitId) {
  storage.set("wxsuitid", wxSuitId);
}

class User {
  wxSuitId(): string | null {
    return getParameterByName("suite_id") || storage.get("wxsuitid");
  }

  wxCorpId(): string | null {
    const paramCorpId = getParameterByName("corpid");
    const storageCorpId = storage.get("wxcorpid");
    const corpId = paramCorpId || storageCorpId;
    
    // 在开发环境下记录调试信息
    if (import.meta.env.MODE === 'development') {
      if (!corpId) {
        // 检查storage中是否有其他可能的token
        const allKeys = uni.getStorageInfoSync().keys || [];
        const tokenKeys = allKeys.filter(key => key.startsWith('wx_token_'));
      }
    }
    
    return corpId;
  }

  wxAppId(): string | null {
    return getParameterByName("wxid") || storage.get("wxid", "", true);
  }

  openId(): string | null {
    const key = "wx_openid_" + this.wxAppId();
    return storage.get(key, "", true);
  }

  setOpenId(id: string) {
    const key = "wx_openid_" + this.wxAppId();
    storage.set(key, id, true);
  }

  /** 判断是否已微信登陆 */
  wxLogined() {
    return !!this.openId();
  }

  token(): string | null {
    const key = "wx_token_" + this.wxCorpId();
    const val = storage.get(key);
    return val;
  }

  setToken(token: string) {
    const key = "wx_token_" + this.wxCorpId();
    storage.set(key, token);
    // 验证token是否成功保存
    const savedToken = storage.get(key);
  }

  //判定用户是否登录过
  logined() {
    const hasToken = !!this.token();
    return hasToken;
  }

  loginInWechatOAuth() {
    //跳转微信oauth
    const wxAppId = this.wxAppId();
    if (wxAppId) {
      storage.set("wxid", wxAppId, true);
      let redirectUri = location.origin + location.pathname;
      redirectUri += removeWxCodeParameters(location.hash);
      const redirect = authUrlByComponent2(wxAppId, redirectUri);
      window.location.href = redirect;
    }
  }

  loginIn() {
    const wxAppId = this.wxAppId();
    if (wxAppId) {
      let redirectUri = location.origin + location.pathname;
      redirectUri += removeWxCodeParameters(location.hash);
      const redirect = authUrlByComponent2(wxAppId, redirectUri);
      const wxLoginCount = Number(
        storage.get("wx_login_count", "0", true) || 0
      );
      if (wxLoginCount < 3) {
        storage.set("wx_login_count", wxLoginCount + 1, true);
        window.location.href = redirect;
      } else {
        // 请求微信登陆失败
        const beforeClearKeys = Object.keys(uni.getStorageInfoSync().keys || {});
        
        storage.clear(true);
        
        const afterClearKeys = Object.keys(uni.getStorageInfoSync().keys || {});
        
        showDialog({
          title: "获取登陆信息失败",
          confirmText: "确定",
        }).then(() => {
          // 直接跳回重登录
          redirectTo({
            url: "/pages/index/login",
          });
        });
      }
    }
  }
}

export default new User();
