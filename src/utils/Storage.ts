// 默认缓存期限为365天
const DEFAULT_CACHE_TIME = 60 * 60 * 24 * 365;

/**
 * 创建本地缓存对象
 * @param {string=} prefixKey -
 * @param {Object} [storage=localStorage] - sessionStorage | localStorage
 */
export const createStorage = ({
  prefixKey = "",
  storage = localStorage,
} = {}) => {
  /**
   * 本地缓存类
   * @class Storage
   */
  const Storage = class {
    private storage = storage;
    private prefixKey?: string = prefixKey;

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase();
    }

    /**
     * @description 设置缓存
     * @param {string} key 缓存键
     * @param {*} value 缓存值
     * @param expire
     */
    set(
      key: string,
      value: any,
      cookieToo = false,
      expire: number | null = DEFAULT_CACHE_TIME
    ) {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire * 1000 : null,
      });
      uni.setStorageSync(this.getKey(key), stringData);
      if (cookieToo) {
        if (value) {
          this.setCookie(this.getKey(key), stringData);
        } else {
          this.removeCookie(this.getCookie(key));
        }
      }
      // this.storage.setItem(this.getKey(key), stringData);
    }

    /**
     * 读取缓存
     * @param {string} key 缓存键
     * @param {*=} def 默认值
     */
    get(key: string, def: any = null, cookieToo = false) {
      // const item = this.storage.getItem(this.getKey(key));
      const fullKey = this.getKey(key);
      const item = uni.getStorageSync(fullKey);
      
      if (item) {
        try {
          const data = JSON.parse(item);
          const { value, expire } = data;
          // 在有效期内直接返回
          if (expire === null || expire >= Date.now()) {
            return value;
          }
          // 缓存过期，记录日志并删除
          console.log(`[STORAGE_DEBUG] Cache expired for key: ${fullKey}, expire: ${new Date(expire)}, now: ${new Date()}`);
          this.remove(this.getKey(key));
        } catch (e) {
          console.log(`[STORAGE_DEBUG] Parse error for key: ${fullKey}, error:`, e);
          return def;
        }
      } else {
        const cookieItem = this.getCookie(this.getKey(key));
        if (cookieItem) {
          try {
            const data = JSON.parse(item);
            const { value, expire } = data;
            // 在有效期内直接返回
            if (expire === null || expire >= Date.now()) {
              return value;
            }
            console.log(`[STORAGE_DEBUG] Cookie cache expired for key: ${fullKey}`);
            this.removeCookie(this.getKey(key));
          } catch (e) {
            console.log(`[STORAGE_DEBUG] Cookie parse error for key: ${fullKey}, error:`, e);
            return def;
          }
        }
      }
      return def;
    }

    /**
     * 从缓存删除某项
     * @param {string} key
     */
    remove(key: string, cookieToo = false) {
      uni.removeStorageSync(this.getKey(key));
      if (cookieToo) {
        this.removeCookie(this.getKey(key));
      }
      // this.storage.removeItem(this.getKey(key));
    }

    /**
     * 清空所有缓存
     * @memberOf Cache
     */
    clear(cookieToo = false): void {
      const beforeKeys = uni.getStorageInfoSync().keys || [];
      console.log(`[STORAGE_DEBUG] Clearing storage - Before: ${beforeKeys.length} keys`);
      console.log(`[STORAGE_DEBUG] Keys to be cleared:`, beforeKeys);
      
      uni.clearStorageSync();
      
      if (cookieToo) {
        console.log(`[STORAGE_DEBUG] Also clearing cookies`);
        this.clearCookie();
      }
      
      const afterKeys = uni.getStorageInfoSync().keys || [];
      console.log(`[STORAGE_DEBUG] Storage cleared - After: ${afterKeys.length} keys`);
      // this.storage.clear();
    }

    /**
     * 设置cookie
     * @param {string} name cookie 名称
     * @param {*} value cookie 值
     * @param {number=} expire 过期时间
     * 如果过期时间为设置，默认关闭浏览器自动删除
     * @example
     */
    setCookie(
      name: string,
      value: any,
      path = "/mp",
      expire: number | null = DEFAULT_CACHE_TIME
    ) {
      // #ifdef H5
      document.cookie = `${this.getKey(
        name
      )}=${value}; path=${path}; Max-Age=${expire}`;
      // #endif
    }

    /**
     * 根据名字获取cookie值
     * @param name
     */
    getCookie(name: string): string {
      // #ifdef H5
      const cookieArr = document.cookie.split("; ");
      for (let i = 0, length = cookieArr.length; i < length; i++) {
        const kv = cookieArr[i].split("=");
        if (kv[0] === this.getKey(name)) {
          return kv[1];
        }
      }
      // #endif
      return "";
    }

    /**
     * 根据名字删除指定的cookie
     * @param {string} key
     */
    removeCookie(key: string) {
      // #ifdef H5
      this.setCookie(key, 1, "/mp", -1);
      // #endif
    }

    /**
     * 清空cookie，使所有cookie失效
     */
    clearCookie(path = "/mp"): void {
      // #ifdef H5
      const keys = document.cookie.match(/[^ =;]+(?==)/g);
      if (keys) {
        for (let i = keys.length; i--; ) {
          document.cookie =
            keys[i] +
            "=0; path=" +
            path +
            ";expire=" +
            new Date(0).toUTCString();
        }
      }
      // #endif
    }
  };
  return new Storage();
};

export const storage = createStorage();

export default Storage;
