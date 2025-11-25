import CommonServer from "@/api/common";
import type { GetMPJsapiInfoRes } from "@/api/wechatmp.dtos";
import Platform from "./Platform";
import user from "./user";

export interface IWechatShare {
  title: string;
  desc: string;
  linkUrl: string;
  imgUrl: string;
}

export default class WechatApi {
  // 图片预览
  static previewImages(current: string, urls: string[]) {
    if (Platform.isWeiXin()) {
      wx.ready(() => {
        wx.previewImage({
          current: current,
          urls: urls,
        });
      });
    }
  }

  // 分享
  static setWechatShare(share: IWechatShare, flag = false) {
    if (Platform.isWeiXin()) {
      share.desc = share.desc && share.desc.substr(0, 30);
      if (!flag) {
        share.imgUrl += "?x-oss-process=image/resize,w_270,limit_0";
      }
      wx.ready(() => {
        // console.log("desc", wx);
        wx.updateTimelineShareData({
          title: share.title,
          link: share.linkUrl, // 分享链接
          imgUrl: share.imgUrl, // 分享图标
        });
        // console.log("share==========>", share);
        wx.updateAppMessageShareData({
          title: share.title, // 分享标题
          desc: share.desc, // 分享描述
          link: share.linkUrl, // 分享链接
          imgUrl: share.imgUrl, // 分享图标
          type: "", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        });
      });
    }
  }

  static initShareConfig() {
    if (Platform.isWeiXin()) {
      // console.log("read jsapi config");
      const payload = {
        wxAppId: user.wxAppId() ?? "",
        targetUrl: location.href.split("#")[0],
      };
      CommonServer.getMPJsapiInfo(payload)
        .then((ret) => {
          // console.log("ret", ret);
          const resp = ret as GetMPJsapiInfoRes;
          if (resp.code == 200) {
            const wxConfigPaylog = {
              debug: false,
              appId: user.wxAppId() || resp.wxAppId,
              timestamp: resp.timestamp,
              nonceStr: resp.nonceStr,
              signature: resp.signature,
              jsApiList: [
                "onMenuShareAppMessage",
                "scanQRCode",
                "onMenuShareTimeline",
                "previewImage",
                "openLocation",
                "addCard",
                "openCard",
                "hideAllNonBaseMenuItem",
                "showAllNonBaseMenuItem",
                "hideMenuItems",
                "showMenuItems",
                "updateAppMessageShareData",
                "updateTimelineShareData",
              ],
              openTagList: [
                "wx-open-subscribe",
                "wx-open-launch-weapp",
                "wx-open-launch-app",
              ],
            };
            // console.log("wxconfig", wxConfigPaylog);
            wx.config(wxConfigPaylog);
          } else {
            console.log("get wechat jsapi sign error");
          }
        })
        .catch((res) => {
          console.log(res);
        });
    }
  }
}
