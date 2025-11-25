// 日期时间格式化
export function dateFormat(dateString: string, fmt = "yyyy-MM-dd hh:mm:ss") {
  if (!dateString) {
    return;
  }

  // return dateString;

  let date = new Date(dateString);
  if (Object.prototype.toString.call(dateString) !== "[object Date]") {
    if (!dateString.includes("T")) {
      dateString = dateString.replace(/-/g, "/");
    }
    date = new Date(dateString);
  }
  const opt = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S+": date.getMilliseconds(), //毫秒
    "w+": "星期" + "日一二三四五六".charAt(date.getDay()), //星期
  };

  type DNACodon = keyof typeof opt;
  type RNACodon = (typeof opt)[DNACodon];

  function validateSequence(values: string[]): asserts values is DNACodon[] {
    if (!values.every(isValidCodon)) {
      console.log(values);
      throw Error("invalid sequence");
    }
  }
  function isValidCodon(value: string): value is DNACodon {
    return value in opt;
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  // for (const k in opt) {
  //   const r = new RegExp("(" + k + ")").exec(fmt);
  //   if (r) {
  //     // 若输入的长度不为1，则前面补零
  //     fmt = fmt.replace(
  //       r[1],
  //       RegExp.$1.length == 1 ? opt[k] : opt[k].padStart(RegExp.$1.length, "0")
  //     );
  //   }
  // }

  for (const k in opt) {
    // const codons = [...k];
    // validateSequence(codons);
    // const tta = codons.map((codon) => opt[codon]);
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 || String(opt[k as keyof typeof opt]).length > 1
          ? opt[k as keyof typeof opt].toString()
          : "0" + opt[k as keyof typeof opt]
      );
    }
  }

  return fmt;
}

export const ParentRoleColor = {
  妈妈: "#FF9CAB",
  爸爸: "#8ac5ff",
  爷爷: "#72CEB7",
  奶奶: "#FFC26F",
  外公: "#72CEB7",
  外婆: "#FFC26F",
  哥哥: "#AD9AFF",
  姐姐: "#AD9AFF",
};

export const showSuccessToast = (
  options: string | UniNamespace.ShowToastOptions
) => {
  if (typeof options === "string") {
    uni.showToast({
      title: options,
      icon: "success",
    });
  } else {
    uni.showToast(options);
  }
};

export const showFailToast = (title: string) => {
  uni.showToast({
    title: title,
    icon: "fail",
  });
};

export const closeToast = () => {
  uni.hideToast();
};

export const showLoadingToast = (options: UniNamespace.ShowLoadingOptions) => {
  uni.showToast({
    title: options.title,
    icon: "loading",
    mask: options.mask,
  });
};

export const isObjectId = (text?: string) =>
  /^[0-9a-fA-F]{24}$/.test(text || "");

/**
 * 保留N位小数，移除末尾多余的0
 * @param num
 * @param len
 * @returns
 */
export function toFixed(
  num: number | string,
  len: number,
  groupSeparator?: string
) {
  let str = (Number(num) || 0).toFixed(len);
  // if (!/^[-0-9.]+$/g.test(str)) return '0';
  if (groupSeparator) {
    // 返回千分位格式
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);
  }
  // 移除末尾多余的0
  while (str.includes(".") && (str.endsWith(".") || str.endsWith("0"))) {
    str = str.slice(0, -1);
  }
  return str;
}

/**
 * 生成uuid方法
 * @returns {string}
 */
export const createUUID = function () {
  let d = new Date().getTime();
  if (window?.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
};

export function getGrowAgeFromMonth(months: number) {
  if (months < 1) {
    return `0月龄`;
  }
  if (months < 12) {
    return `${months}个月`;
  }
  const years = Math.floor(months / 12);
  const m = months % 12;
  return `${years}岁${m > 0 ? m : ""}${m > 0 ? "个月" : ""}`;
}

export const checkWeiXin = () => {
  const ua = navigator.userAgent.toLowerCase();
  const matchWXWork = ua.match(/wxwork/i);
  const matchWeixin = ua.match(/micromessenger/i);
  const matchMobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|IEMobile)/i
  );
  let isWXWork = false;
  if (matchWXWork !== null && matchWXWork.includes("wxwork")) {
    isWXWork = true;
  }
  let isWeixin = false;
  if (
    !isWXWork &&
    matchWeixin !== null &&
    matchWeixin.includes("micromessenger")
  ) {
    isWeixin = true;
  }
  // const isWXWork = ua.match(/wxwork/i) == "wxwork";
  // const isWeixin = !isWXWork && ua.match(/micromessenger/i) == "micromessenger";
  let isMobile = false;
  let isDesktop = false;

  if (matchMobile !== null) {
    isMobile = true;
    // isDesktop = false;
  } else {
    // isMobile = false;
    isDesktop = true;
  }

  return {
    isWeixin,
    isWXWork,
    isMobile,
    isDesktop,
  };
};
