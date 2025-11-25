// import Cookies from "js-cookie";
// import storage from "good-storage";

export const LOGIN_STATUS = "Login_Status"; // 登录态 0 1 2 Number
export const ACCESS_TOKEN = "Access_Token"; // accessToken String
export const OPEN_ID = "Open_Id";
export const USER_INFO = "User_Info"; // 用户信息 {} Object
export const API_TOKEN = "Api_Token";

export const PAGE_ATTRS = "Page_Attrs";
export const PAGE_DATA = "Page_Data";
export const PUBLICITY_PAGE_DRAFT = "PUBLICITY_PAGE_DRAFT";
export const PUBLICITY_SCHOOL_INFO = "PUBLICITY_SCHOOL_INFO";

export const SESSION_DATA = "SESSION_DATA";
export const CACHE_DATA = "SESSION_DATA";

export const BUTTON_LOGIN_CLICKED = "BUTTON_LOGIN_CLICKED";

// /**
//  * 设置cookie
//  * @param key
//  * @param value
//  * @param options
//  * @returns {*}
//  */
// export function saveCookie(key: string, value: string, options: any) {
//   Cookies.set(key, value, options);
//   return value;
// }

// /**
//  * 获取cookie
//  * @param key
//  * @param defaultValue
//  * @returns {*}
//  */
// export function loadCookie(key: string, defaultValue: string) {
//   return Cookies.get(key) || defaultValue;
// }

// /**
//  * 删除cookie
//  * @param key
//  * @returns {string}
//  */
// export function removeCookie(key: string) {
//   Cookies.remove(key);
//   return "";
// }

// /**
//  * 设置本地存储
//  * @param key
//  * @param value
//  * @returns {*}
//  */
// export function saveStorage(key: string, value: any) {
//   storage.set(key, value);
//   return value;
// }

// /**
//  * 获取本地存储
//  * @param key
//  * @param defaultValue
//  * @returns {*}
//  */
// export function loadStorage(key: string, defaultValue: any) {
//   return storage.get(key, defaultValue);
// }

// /**
//  * 删除本地存储
//  * @param key
//  * @returns {string}
//  */
// export function removeStorage(key: string) {
//   storage.remove(key);
//   return "";
// }

// /**
//  * 保存会话存储
//  * @param key
//  * @param value
//  * @returns {*}
//  */
// export function saveSessionStorage(key: string, value: any) {
//   storage.session.set(key, value);
//   return value;
// }

// /**
//  * 获取会话存储
//  * @param key
//  * @param defaultValue
//  * @returns {*}
//  */
// export function loadSessionStorage(key: string, defaultValue: any) {
//   return storage.session.get(key, defaultValue);
// }

// /**
//  * 删除会话存储
//  * @param key
//  * @returns {string}
//  */
// export function removeSessionStorage(key: string) {
//   storage.session.remove(key);
//   return "";
// }
