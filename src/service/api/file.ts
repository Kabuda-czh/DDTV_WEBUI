/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 16:31:05
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 17:59:23
 * @FilePath: \DDTV_WEBUI\src\service\api\file.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 获取已录制的文件列表
 *
 * 返回值为
 * @returns {Promise<RequestResult<string[]>>} 获取已录制的文件列表路径
 */
export function fetchFileGetAllFileList() {
  return fetchApiByPost<string[]>("File_GetAllFileList");
}

/**
 * 下载对应的文件
 * @param {String} fileName 此处为文件的完整路径，包括文件名
 *
 * 返回值为
 * @returns {Promise<RequestResult<Blob | string>>} 成功返回 blob，失败返回错误信息
 */
export function fetchFileGetFile(fileName: string) {
  return fetchApiByPost<Blob | string>("File_GetFile", { FileName: fileName });
}

/**
 * 根据文件树结构返回已录制的文件总列表
 *
 * 返回值为
 * @returns {Promise<RequestResult<FileGetFilePathList[]>>} {@link ApiAuth.FileGetFilePathList}
 */
export function fetchFileGetFilePathList() {
  return fetchApiByPost<ApiAuth.FileGetFilePathList[]>("File_GetFilePathList");
}

/**
 * 根据文件类型分类获取已录制的文件总列表
 *
 * 返回值为
 * @returns {Promise<RequestResult<FileGetTypeFileList[]>>} {@link ApiAuth.FileGetTypeFileList}
 */
export function fetchFileGetTypeFileList() {
  return fetchApiByPost<ApiAuth.FileGetTypeFileList[]>("File_GetTypeFileList");
}
