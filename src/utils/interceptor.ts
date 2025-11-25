// import { useSchoolStore } from "@/store/modules/school";
import user from "./user";
import type { AuthenticateResponse } from "@/api/auth.dtos";
//白名单 不需要验证token
export const whiteList = [
  "/subpages_a/pages/bindkid/index",
  "/pages/index/login",
  "/pages/index/webv",
  "/pages/cashier/index",
  "/pages/cashier/paysuccess",
  "/pages/cashier/marketing",
  "/pages/cashier/marketingpaysuccess",
  "/subpages_b/pages/paper/weekly",
  "/subpages_b/pages/paper/daily",
  "/subpages_b/pages/paper/list/daily",
  "/subpages_b/pages/paper/list/weekly",
  "/kidevaluation/detail",
  "/subpages_b/pages/healthypartner/report",
];
//登录页
const redirectToLoginPage = (url: string) => {
  console.log(`[LOGIN_DEBUG] redirectToLoginPage called with URL: ${url}`);
  let targetUrl = "/pages/index/login";
  if (url) {
    targetUrl = "/pages/index/login?redirect=" + encodeURIComponent(url);
  }
  console.log(`[LOGIN_DEBUG] Redirecting to: ${targetUrl}`);
  uni.redirectTo({
    url: targetUrl,
  });
};

const gotoLogin = (url: string) => {
  console.log(`[LOGIN_DEBUG] gotoLogin called for URL: ${url}`);

  // 在小程序环境中，直接跳转到登录页，不调用user.loginIn()
  // user.loginIn()是为H5环境设计的，使用window.location.href在小程序中无效
  redirectToLoginPage(url);

  // 注释掉user.loginIn()，因为它在小程序中不起作用
  // user.loginIn();
};

export function navInterceptor(currentPath: string) {
  if (currentPath) {
    const fullPath = "/" + currentPath;
    console.log("fullPath", fullPath, whiteList);
    if (!whiteList.includes(fullPath)) {
      //获取用户的token
      if (!user.wxLogined()) {
        console.log("login 5");
        gotoLogin(fullPath);
        return false;
      } else {
        if (!user.logined()) {
          console.log("login 3");
          redirectToLoginPage(fullPath);
          return false;
        }
      }
    }
  }

  const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  list.forEach((item) => {
    uni.addInterceptor(item, {
      invoke(args) {
        console.log("拦截", args);
        //获取要跳转的页面路径（url去掉"?"和"?"后的参数）
        const url = args.url.split("?")[0];
        const notNeed = whiteList.includes(url);
        // 如果在whiteList里面就不需要登录
        if (notNeed) {
          console.log("无需登陆页面", url);
          return args;
        } else {
          //需要登录
          if (!user.logined()) {
            console.log(`[LOGIN_DEBUG] Navigation intercepted - Page requires login: ${url}`);
            console.log(`[LOGIN_DEBUG] Redirecting to login page`);
            gotoLogin(args);
            return false;
          } else {
            console.log(`[LOGIN_DEBUG] Navigation allowed - User is logged in: ${url}`);
            return args;
          }
        }
      },
      success(args) {
      },
      fail(err) {
      },
      complete(res) {
      },
    });
  });
  return true;
}

export function reqInterceptor() {
  uni.addInterceptor("request", {
    invoke(args) {
      const bearerToken = user.token();
      if (bearerToken) {
        args.header = {
          ...args.header,
          authorization: `Bearer ${bearerToken}`,
        };
      }
    },
    success(args) {
      if (args.statusCode == 401 || args.statusCode == 403) {
        user.setToken("");
        gotoLogin("/");
      }
    },
    fail(err) {
    },
    complete(res) {
    },
  });
}
