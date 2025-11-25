import config from "../pages.json";
import { useSchoolStore } from "@/store/modules/school";
interface IPage {
  path: string;
}

type Query = Record<string, number | boolean | string | null | undefined>;
interface INavigateToOptions extends UniNamespace.NavigateToOptions {
  query?: Query;
  isTabBarPage?: boolean;
}

function searchParams(obj: Query) {
  const str = [];
  for (const p in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p] || ""));
    }
  }
  return str.join("&");
}

export function goWebView(url?: string) {
  if (url) {
    uni.navigateTo({
      url: `/pages/index/webv?url=${encodeURIComponent(url)}`,
    });
  }
}

function goConfigUrl(key: string) {
  const schoolStore = useSchoolStore();
  goWebView(schoolStore.config?.[key]);
}

/** 用户协议 */
export function goWebViewHelp() {
  goConfigUrl("HELP_URL");
}
/** 用户协议 */
export function goWebViewAgreement() {
  goConfigUrl("AGREEMENT_URL");
}
/** 隐私政策 */
export function goWebViewPrivac() {
  goConfigUrl("POLICY_URL");
}
/** 儿童 隐私政策 */
export function goWebViewPrivacY() {
  goConfigUrl("PRIVACY_URL");
}

function subPackages(options: INavigateToOptions) {
  if (options.url?.startsWith("/pages/")) {
    const [path] = options.url.split("?");
    const { tabBar, pages = [], subPackages = [] } = config;
    const { list: tabBarPages = [] } = tabBar || {};

    if (tabBarPages.find((page) => `/${page.pagePath}` === path)) {
      options.isTabBarPage = true;
    } else if (pages.find((page) => `/${page.path}` === path)) {
      // 主包路由
    } else {
      for (let index = 0; index < subPackages.length; index++) {
        const pack = subPackages[index];
        if ((pack.pages as IPage[]).find((page) => `/${page.path}` === path)) {
          // 子包跟由
          options.url = `/${pack.root}${options.url}`;
        }
      }
    }
  }

  // 处理 qeury
  if (options.query) {
    if (options.isTabBarPage) {
      // tabbar 页不支持传参
      uni.setStorageSync("jump_to_tabbar_query", JSON.stringify(options.query));
    } else {
      // 非 tabbar 页通过传参
      const url = `${options.url}${options.url?.indexOf("?") > 0 ? "&" : "?"
        }${searchParams(options.query)}`;
      options.url = url;
    }
  }
  return options;
}

function go(options: INavigateToOptions, nav: boolean) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { success, query, isTabBarPage, ...rest } = subPackages(options);
  return (isTabBarPage ? uni.switchTab : nav ? uni.navigateTo : uni.redirectTo)(
    {
      success: (result) => {
        success?.(result);
        // hook onLoad 事件可能迟于 success
        setTimeout(() => {
          success?.(result);
        }, 500);
      },
      ...rest,
    }
  );
}

export function navigateTo(options: INavigateToOptions) {
  return go(options, true);
}

// 路径映射map
// 1) 把 pathMap 的 value 改成 { url, module }
const pathMap = new Map<string, { url: string; module?: string }>([
  ['/supercare_morning_view', { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'morning' }],
  ['/supercare_brunch_view',  { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'brunch' }],
  ['/supercare_break_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'break' }],
  ['/supercare_toilet_view',  { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'toilet' }],
  ['/supercare_water_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'water' }],
  ['/supercare_milk_view',    { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'milk' }],
  ['/supercare_diaper_view',  { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'diaper' }],
  ['/supercare_noon_view',    { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'noon' }],
  ['/supercare_lunch_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'lunch' }],
  ['/supercare_sleep_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'sleep' }],
  ['/supercare_snack_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'snack' }],
  ['/supercare_night_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'night' }],
  ['/supercare_dinner_view',  { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'dinner' }],
  ['/supercare_clean_view',   { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'clean' }],
  ['/supercare_mindset_view', { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'mindset' }],
  ['/supercare_note_view',    { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'note' }],
  ['/supercare_work_view',    { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'work' }],
  ['/supercare_logs_view', { url: '/pages/zhinengtaojian/supercare_logs_view/index', module: 'spirit_emotion' }],
  ['/supercare_week_view', { url: '/pages/zhinengtaojian/supercare_morning_view/index', module: 'week' }],
  ['/salesCluesListView', { url: '/pages/clue_manage/index' }], //线索管理
  ['/salesFollowListView', { url: '/pages/genjin_manage/index' }], //跟进管理
  ['/bizreport_main_contract', { url: '/pages/order_manage/index' }], //订单管理
  ['/audit_main_View', { url: '/pages/order_audit_manage/index' }], //订单审核
  ['/bizreport_main_finance', { url: '/pages/shouzhi_manage/index' }], //收支管理
  ['/yoyopay_view', { url: '/pages/cashier_manage/index' }], //幼幼收银
  ['/bizreport_main_consum', { url: '/pages/kebao_manage/index' }], //课包记录
  ['/menu',    { url: '/pages/menu/index', module: '' }],
  ['/yoyo_teacher_manage',    { url: '/pages/teacher/index', module: '' }],
  ['/classinfo',    { url: '/pages/classinfo/index', module: '' }],
  ['/medic/medicListView',    { url: '/pages/medic/index', module: '' }],
  ['/teacherLeave/teacherLeaveListView',    { url: '/pages/leave/index', module: '' }],
  ['/pickupListView',    { url: '/pages/pickup/index', module: '' }],
  ['/attendance/attendanceView',    { url: '/pages/attendance/index', module: '' }],
  ['/dailyHealthy',    { url: '/pages/health/index', module: '' }],
  ['/livechoseview',    { url: '/pages/live/index', module: '' }],
  ['/growbook/summary',    { url: '/pages/grow/index', module: '' }],
  ['/schedule_manage',    { url: '/subpages_a/pages/schedule/index', module: '' }],
  ['/course_main',    { url: '/subpages_a/pages/course/index', module: '' }],
  ['/course_index',    { url: '/subpages_a/pages/course/sign', module: '' }],
  ['/bizcourse_comment_teacher',    { url: '/pages/evaluate/index', module: '' }],
  ['/bizreport_garden_report',    { url: '/pages/report/school', module: '' }],
  ['/studentSignView',    { url: '/pages/check/index', module: '' }],
  ['/topic_main',    { url: '/pages/topic/index', module: '' }],
  ['/bill_main',    { url: '/pages/bill/index', module: '' }],
]);

// 2) 跳转时带上 module
export function navigateToRoute(path: string) {
  const item = pathMap.get(path);
  if (!item) {
    uni.showToast({ title: '路径错误', icon: 'none' });
    return;
  }
  return navigateTo({ url: item.url, query: { module: item.module } });
}

export function redirectTo(options: INavigateToOptions) {
  return go(options, false);
}
