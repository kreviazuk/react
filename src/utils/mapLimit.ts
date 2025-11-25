/**
 * @params list {Array} - 要迭代的数组
 * @params limit {Number} - 并发数量控制数
 * @params asyncHandle {Function} - 对`list`的每一个项的处理函数，参数为当前处理项，必须 return 一个Promise来确定是否继续进行迭代
 * @return {Promise} - 返回一个 Promise 值来确认所有数据是否迭代完成
 */
function mapLimit<T>(list: T[], limit: number, asyncHandle: (operation: T) => Promise<any>): Promise<any> {
  function recursion(arr: T[]): Promise<any> {
    return asyncHandle(arr.shift()!).then(() => {
      if (arr.length !== 0) return recursion(arr);
      return 'finish';
    });
  }

  // 生成新数组
  const listCopy: T[] = ([] as T[]).concat(list);
  const asyncList: Promise<any>[] = [];
  let i = limit;
  while (i && listCopy.length !== 0) {
    i -= 1;
    asyncList.push(recursion(listCopy));
  }
  return Promise.all(asyncList);
}

export { mapLimit };
export default mapLimit;
