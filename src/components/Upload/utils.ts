import type { GetAliyunStsTokenV2Res, OssInfoDTO } from "@/api/base.dtos";
import { GetAliyunStsTokenV2Req } from "@/api/base.dtos";
import { EventAttachDTO, EventAttachItem } from "@/api/event.dtos";
import { JsonServiceClient } from "@/api/yoyo.client";
import { createUUID } from "@/utils";
// #ifdef H5
import { Md5 } from "ts-md5";
// #endif

export type UploadFileStatus =
  | "error"
  | "success"
  | "done"
  | "uploading"
  | "removed";

export interface IChooseFile {
  /**
   * 视频的时间长度
   */
  duration?: number;
  /**
   * 视频的高度
   */
  height?: number;
  /**
   * 视频缩略图临时文件路径
   */
  thumbTempFilePath?: string;
  /**
   * 视频的宽度
   */
  width?: number;

  /**
   * 文件类型
   *
   * 可选值：
   * - 'image': 图片;
   * - 'video': 视频;
   */
  fileType: "video" | "image" | string;
  /**
   * 本地临时文件路径 (本地路径)
   */
  path: string;

  name: string;
  /**
   * 本地临时文件大小，单位 B
   */
  size: number;

  fileId: string;

  file?: File;
}
export interface IChooseFiles {
  /**
   * 图片的本地文件路径列表
   */
  // tempFilePaths: string[];
  /**
   * 图片的本地文件列表，每一项是一个 File 对象
   */
  tempFiles: IChooseFile[];
}

export type IMAGE_TYPE = {
  status?: UploadFileStatus;
  percent?: number;

  ossInfoId: string;
  // title: string | number;
  type: string;
  href?: string;
  poster?: string;
};

export type FILE_INFO = {
  md5: string;
  width: number;
  height: number;
  token: GetAliyunStsTokenV2Res;
};

export const h5GetImageWH = (
  file: File
): Promise<{
  width: number;
  height: number;
}> => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    if (file.type.startsWith("image/") && !file.type.startsWith("image/svg")) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        try {
          const image = new Image();
          image.onload = () => {
            const { width, height } = image;
            resolve({ width, height });
          };
          image.onerror = (err) => {
            reject(err);
          };
          image.src = (e.target?.result || "") as string;
        } catch (err) {
          reject(err);
        }
      };
      fileReader.readAsDataURL(file);
    } else {
      resolve({ width: 0, height: 0 });
    }
  });
};

const getImageWH = (file: IChooseFile) => {
  // #ifdef H5
  return h5GetImageWH(file.file!);
  // #endif

  // #ifndef H5
  return Promise.resolve({ width: 0, height: 0 });
  // #endif
};

// #ifdef H5
export const h5GetFileMD5 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const chunkSize = 2097152; // Read files in chunks of 2MB
    const chunks = Math.ceil(file.size / chunkSize);
    const md5 = new Md5();
    const fileReader = new FileReader();

    let currentChunk = 0;
    let start = currentChunk * chunkSize;
    let end = start + chunkSize >= file.size ? file.size : start + chunkSize;

    fileReader.readAsArrayBuffer(file.slice(start, end));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fileReader.onload = function (e: ProgressEvent<FileReader>) {
      md5.appendByteArray(new Uint8Array(fileReader.result! as ArrayBuffer));
      currentChunk++;
      if (currentChunk < chunks) {
        start = currentChunk * chunkSize;
        end = start + chunkSize >= file.size ? file.size : start + chunkSize;
        fileReader.readAsArrayBuffer(file.slice(start, end));
      } else {
        const md5sum = <string>md5.end(); // compute hash
        resolve(md5sum);
      }
    };

    fileReader.onerror = function (e: ProgressEvent<FileReader>) {
      console.error("Failed to calculate MD5 sum for " + file.name, e);
      reject("Failed to calculate MD5 sum for " + file.name + ". " + e);
    };
  });
};
// #endif
// #ifndef H5
export const uniGetFileMD5 = (file: IChooseFile): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    uni.getFileInfo({
      filePath: file.path,
      digestAlgorithm: "md5",
      success: (res) => {
        console.log(res);
        resolve(res.digest || "");
      },
      fail: () => {
        reject();
      },
    });
  });
};
// #endif

const getFileMD5 = (file: IChooseFile) => {
  // #ifdef H5
  return h5GetFileMD5(file.file!);
  // #endif

  // #ifndef H5
  return uniGetFileMD5(file);
  // #endif
};

// #ifdef H5
export const h5GetFileBase64String = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve((reader.result as string)?.split(",")?.[1]);
    reader.onerror = (error) => reject(error);
  });
// #endif
// #ifndef H5
export const uniUrlToBase64String = (url: string): Promise<string> => {
  // const imgData = uni.getFileSystemManager().readFileSync(url, "base64");
  // // const base64 = "data:image/jpeg;base64," + imgData;
  // return imgData;
  return new Promise<string>((resolve, reject) => {
    uni.getFileSystemManager().readFile({
      filePath: url,
      encoding: "base64",
      success: (res) => {
        resolve(res.data as string);
      },
      fail: () => {
        reject();
      },
    });
  });
};
// #endif

export const getFileBase64String = (file: IChooseFile) => {
  // #ifdef H5
  return h5GetFileBase64String(file.file!);
  // #endif

  // #ifndef H5
  return uniUrlToBase64String(file.path);
  // #endif
};

export const getAliyunStsToken = async (
  xAppId: number | undefined,
  schoolId: string,
  key: string
) => {
  return await new JsonServiceClient().post({
    request: new GetAliyunStsTokenV2Req({
      schoolId,
      keys: [key],
    }),
    appid: xAppId,
  });
};

export const chooseMedia = ({
  count,
  mediaType,
  extName,
  sourceType,
}: {
  count: number;
  mediaType?: ("image" | "video" | "all")[];
  // 文件名过滤
  extName?: string[];
  sourceType?: ("album" | "camera")[];
}) => {
  return new Promise<IChooseFiles>((resolve, reject) => {
    // #ifdef H5
    if (mediaType?.includes("video")) {
      uni.chooseVideo({
        sourceType: sourceType,
        extension: extName,
        success(res) {
          const { tempFilePath, tempFile } = res;
          resolve({
            tempFiles: [
              {
                fileId: createUUID(),
                fileType: (tempFile as File).type.split("/")[0],
                // @ts-ignore
                path: (tempFile as File).path,
                size: (tempFile as File).size,
                name: (tempFile as File).name,
                file: tempFile as File,
              },
            ],
          });
        },
        fail() {
          reject();
        },
      });
    } else {
      uni.chooseImage({
        count: count,
        sourceType: sourceType,
        extension: extName,
        success(res) {
          // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
          const { tempFilePaths, tempFiles } = res;
          resolve({
            // tempFilePaths: Array.isArray(tempFilePaths)
            //   ? tempFilePaths
            //   : [tempFilePaths],

            tempFiles: Array.isArray(tempFiles)
              ? tempFiles.map((f) => {
                  const file = f as File;
                  return {
                    fileId: createUUID(),
                    fileType: file.type.split("/")[0],
                    // @ts-ignore
                    path: file.path,
                    size: file.size,
                    name: file.name,
                    file,
                  };
                })
              : [
                  {
                    fileId: createUUID(),
                    fileType: (tempFiles as File).type.split("/")[0],
                    // @ts-ignore
                    path: (tempFiles as File).path,
                    size: (tempFiles as File).size,
                    name: (tempFiles as File).name,
                    file: tempFiles as File,
                  },
                ],
          });
        },
        fail() {
          reject();
        },
      });
    }
    // #endif
    // #ifndef H5
    uni.chooseMedia({
      count: count,
      mediaType: mediaType?.map((x) => (x === "all" ? "mix" : x)),
      sourceType: sourceType,
      maxDuration: 30,
      camera: "back",
      success(res) {
        console.log("chooseMedia：", res);
        const { tempFiles = [] } = res;
        resolve({
          tempFiles: tempFiles.map((x) => ({
            ...x,
            fileId: createUUID(),
            path: x.tempFilePath,
            name: x.tempFilePath.substring(
              x.tempFilePath.lastIndexOf("/") + 1,
              x.tempFilePath.length
            ),
          })),
        });
      },
      fail(ex) {
        reject(ex);
      },
    });
    // #endif
  });
};

export const initFileUpload = (
  xAppId: number | undefined,
  schoolId: string,
  file: IChooseFile
) => {
  return new Promise<FILE_INFO>((resolve, reject) => {
    Promise.all([
      getFileMD5(file),
      getImageWH(file),
      getAliyunStsToken(xAppId, schoolId, file.name),
    ])
      .then(([md5, { width, height }, token]) => {
        if (token?.statusCode !== 200) {
          return reject(token?.accessKeyId || "上传请求失败");
        }

        const fileInfo = {
          md5,
          width,
          height,
          token,
        };

        resolve(fileInfo);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/*上传附件*/
export const uploadFile = (
  file: IChooseFile,
  fileInfo: FILE_INFO,
  onProgressUpdate?: Function,
  timeout: number = 1000 * 60
) => {
  const { token = {} } = fileInfo;
  return new Promise<OssInfoDTO>((resolve, reject) => {
    const uploadTask = uni.uploadFile({
      timeout,
      url: token.uploadHost!,
      formData: {
        OSSAccessKeyId: token.accessKeyId!,
        callback: token.callback!,

        key: token.signItems![0].key!,
        filename: token.signItems![0].originalKey!, // 文件换名
        policy: token.signItems![0].policy!,
        signature: token.signItems![0].signature!,

        chunk: "0",
        success_action_status: "200",

        "x:classid": "",
        "x:filehash": fileInfo.md5 || "",
        "x:vwidth": `${fileInfo.width || ""}`,
        "x:vheight": `${fileInfo.height || ""}`,

        "x:playseconds": "0",
        "x:uploadsrc": "TYPE_PERSON",
        "x:targetdir": "",
        "x:originalname": file.name,
        "x:copyto": "",
      },
      name: "file",
      // #ifdef H5
      file: file.file,
      // #endif
      // #ifndef H5
      filePath: file.path,
      // #endif
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      success: (uploadFileRes) => {
        if (uploadFileRes.statusCode !== 200) {
          reject(uploadFileRes.data);
        }
        const { fileid, filename, fileurl, thumburl } = JSON.parse(
          uploadFileRes.data
        );

        resolve({
          resId: fileid,
          fileExt: filename.substring(
            filename.lastIndexOf(".") + 1,
            filename.length
          ),
          fileName: filename,
          fileUri: fileurl,
          thumbnilUri: thumburl,
        } as OssInfoDTO);
      },
      fail: (res) => {
        if (res?.errMsg?.indexOf("timeout") > -1) {
          reject("上传超时");
        } else {
          reject("网络请求失败");
        }
      },
    });

    uploadTask.onProgressUpdate((res) => {
      onProgressUpdate?.(res, uploadTask);
    });
  });
};

export const transformEventAttachDTO = (src?: EventAttachDTO) => {
  if (!src) return src;

  const {
    imageItems,
    videoItems,
    audioItems,
    fileItems,
    linkItems,
    tingItems,
  } = src;
  return {
    attachImages: imageItems?.map((x) => ({
      resId: x.ossInfoId,
    })),
    attachVideos: videoItems?.map((x) => ({
      resId: x.ossInfoId,
    })),
    attachVoices: audioItems?.map((x) => ({
      resId: x.ossInfoId,
    })),
    attachFiles: fileItems?.map((x) => ({
      resId: x.ossInfoId,
    })),
    attachLinks: linkItems,
    attachTings: tingItems,
  } as EventAttachItem;
};
