import type { Config } from "@/wecom-sidebar-jssdk";

/**
 * 获取重定位的 OAuth 路径
 * @returns {string}
 */
export const generateOAuthUrl = (config: Config) => {
  // const [redirectUri] = window.location.href.split("#");
  const redirectUri = window.location.href;

  const searchObj = {
    appid: config.corpId,
    redirect_uri: encodeURIComponent(redirectUri),
    response_type: "code",
    scope: config.scope,
    agentid: config.agentId,
    state: "A1",
  };

  const search = Object.entries(searchObj)
    .map((entry) => {
      const [key, value] = entry;
      return `${key}=${value}`;
    })
    .join("&");

  return `https://open.weixin.qq.com/connect/oauth2/authorize?${search}#wechat_redirect`;
};

export const makeState = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const authUrlByComponent2 = (appid: string, redirect_url: string) => {
  // eslint-disable-next-line no-throw-literal
  // if (this.appid === null) throw "appid must not be null";
  // appid = import.meta.env.VITE_APP_WX_AUTHORIZER_APPID;
  // const redirect_url = processUrl();
  const scope = "snsapi_base";
  const state = makeState();
  const enUrl = encodeURIComponent(redirect_url);
  // console.log("target enurl", enUrl);
  return `https://wx.yban.co/wxauth?appid=${appid}&redirect_uri=${enUrl}&response_type=code&scope=${scope}&state=${state}&component_appid=${
    import.meta.env.VITE_APP_WX_COMPONENT_APPID
  }`;
};
