/**
 * Created by Sunnie on 19/06/04.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str: string) {
  const validMap = ["admin", "editor"];
  return validMap.indexOf(str.trim()) >= 0;
}

/**
 * @param {string} val
 * @returns {Boolean}
 */
export function isPhoneNumber(val: string) {
  return /^1\d{10}$/.test(val);
}
