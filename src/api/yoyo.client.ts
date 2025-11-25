// import { IReturn } from "@/api/dto";
// import { useCommonStore } from "@/store/modules/common";
import { getLogger } from "@/utils/log";
import user from "@/utils/user";
import { initFileUpload, uploadFile as uploadFileToOssUtils, type IChooseFile } from '@/components/Upload/utils';
const logger = getLogger("yoyo.client.ts");

// 简单的omit函数实现，避免lodash-es在小程序中的兼容性问题
function omit(obj: any, keys: string[]): any {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}
export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
}

// interface IServiceStackRequest {
//   getTypeName: () => any;
//   getMethod: () => any;
//   createResponse: () => any;
// }
export interface IReturn<T> {
  getTypeName: () => any;
  getMethod: () => any;
  createResponse(): T;
}

export const APPID = {
  TEACHER: 1,
  PARENT: 2,
  WECHAT: 11,
};

export const getCurrentAppId = () => {
  return APPID.TEACHER;
};

export const OBJECTID_EMPTY = "000000000000000000000000";
export const MAX_INT32 = 2147483647; // 2 ** 32 / 2 - 1

export class JsonServiceClient {
  baseUrl: string;

  constructor(
    baseUrl = `${import.meta.env.VITE_APP_API_URL}api/educrm/json/reply/`
  ) {
    this.baseUrl = baseUrl;
  }

  private toAbsoluteUrl<T>(request: IReturn<T>): string {
    return `${this.baseUrl}${request.getTypeName()}`;
  }

  private async uniRequest<T>(
    request: IReturn<T>,
    method?: HttpMethods,
    appid?: number,
    auth?: boolean
  ): Promise<T> {
    const res: any = await new Promise((resolve, reject) => {
      if (auth) {
        // const commonStore = useCommonStore();
        // if (!commonStore.bearerToken) {
        //   return reject({
        //     ret: false,
        //     code: 401,
        //     message: "请先登录",
        //   });
        // }
      }

      uni.request({
        method: method ?? request.getMethod(),
        url: this.toAbsoluteUrl(request),
        enableHttp2: true,
        header: {
          "x-appid": appid ?? getCurrentAppId(),
        },
        data: request,
        success: (res: UniApp.RequestSuccessCallbackResult) => {
          resolve(res.data);
        },
        fail: (res: UniApp.GeneralCallbackResult) => {
          reject(res);
        },
      });
    });

    if (
      !Object.prototype.hasOwnProperty.call(res, "ret") &&
      !Object.prototype.hasOwnProperty.call(res, "code") &&
      res.responseStatus?.errorCode &&
      res.responseStatus?.message
    ) {
      res.ret = false;
      res.code = 500;
      if (!Object.prototype.hasOwnProperty.call(res, "message")) {
        res.message = res.responseStatus?.message;
      }
    }

    try {
      if (!Object.prototype.hasOwnProperty.call(res, "ret")) {
        res.ret = true;
      } else {
        res.code = res.ret ? 200 : 500;
      }
      if (!Object.prototype.hasOwnProperty.call(res, "code")) {
        res.code = 200;
      } else {
        res.ret = res.code === 200 || res.code === 0;
      }
      if (res.ret) {
        res.code = 200;
      }
      return res;
    } catch {
      logger.ERROR("api call exception", res, request);
      // const errRes = {
      //   ret: false,
      //   code: 500
      // }
      return res;
    }
  }

  public get<T>({
    request,
    appid,
    auth,
  }: {
    request: IReturn<T>;
    appid?: number;
    auth?: boolean;
  }): Promise<T> {
    return this.uniRequest<T>(request, HttpMethods.GET, appid, auth);
  }

  public post<T>({
    request,
    appid,
    auth,
  }: {
    request: IReturn<T>;
    appid?: number;
    auth?: boolean;
  }): Promise<T> {
    return this.uniRequest<T>(request, HttpMethods.POST, appid, auth);
  }

  private getMethod<T>(request: IReturn<T>): HttpMethods {
    return typeof request.getMethod == "function"
      ? request.getMethod()
      : HttpMethods.POST;
  }

  public send<T>({
    request,
    appid,
    auth,
  }: {
    request: IReturn<T>;
    appid?: number;
    auth?: boolean;
  }): Promise<T> {
    return this.uniRequest<T>(request, this.getMethod(request), appid, auth);
  }

  /**
   * 通用文件上传方法
   * @param filePath 文件路径
   * @param fileType 文件类型 ('image' | 'video')
   * @param schoolId 学校ID
   * @param appid 应用ID，默认为1
   * @returns Promise<OssInfoDTO | null> 返回上传结果，包含resId等信息
   */
  public async uploadFile(
    filePath: string,
    fileType: 'image' | 'video',
    schoolId: string,
    appid: number = 1
  ): Promise<import('@/api/base.dtos').OssInfoDTO | null> {
    try {
      // 构造文件对象
      const file: IChooseFile = {
        name: `${fileType}_${Date.now()}.${fileType === 'image' ? 'jpg' : 'mp4'}`,
        path: filePath,
        size: 0, // 这里可能需要根据实际情况获取文件大小
        fileType: fileType,
        fileId: `${fileType}_${Date.now()}`,
        // 如果是视频，可能需要duration
        ...(fileType === 'video' && { duration: 0 })
      };
      
      if (!schoolId) {
        throw new Error('学校ID不能为空');
      }
      
      // 初始化文件上传（获取STS token等信息）
      const fileInfo = await initFileUpload(appid, schoolId, file);
      
      // 执行上传
      const ossInfo = await uploadFileToOssUtils(
        file, 
        fileInfo,
        undefined, // 不需要进度回调
        60000 // 60秒超时
      );
      
      return ossInfo;
      
    } catch (error) {
      return null;
    }
  }

  /**
   * 批量上传文件
   * @param files 文件列表 { path: string, type: 'image' | 'video' }[]
   * @param schoolId 学校ID
   * @param appid 应用ID，默认为1
   * @returns Promise<{ success: OssInfoDTO[], failed: string[] }> 返回成功和失败的结果
   */
  public async uploadFiles(
    files: Array<{ path: string; type: 'image' | 'video' }>,
    schoolId: string,
    appid: number = 1
  ): Promise<{ success: import('@/api/base.dtos').OssInfoDTO[], failed: string[] }> {
    const success: import('@/api/base.dtos').OssInfoDTO[] = [];
    const failed: string[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const { path, type } = files[i];
      
      try {
        const result = await this.uploadFile(path, type, schoolId, appid);
        if (result) {
          success.push(result);
        } else {
          failed.push(path);
        }
      } catch (error) {
        failed.push(path);
      }
    }
    
    return { success, failed };
  }
}
