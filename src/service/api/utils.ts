/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 14:47:52
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 14:57:45
 * @FilePath: \DDTV_WEBUI\src\service\api\utils.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { AxiosRequestConfig } from "axios";
import { request } from "../request";

export function fetchApiByGet<T = any>(cmd: string, params?: any, config?: AxiosRequestConfig) {
  const searchParams = new URLSearchParams();
  searchParams.append("cmd", cmd);
  Object.keys(params).forEach(key => {
    searchParams.append(key, params[key]);
  });
  return request.get<T>(`/${cmd}`, { params: searchParams, ...config });
}

export function fetchApiByPost<T = any>(cmd: string, params?: any, config?: AxiosRequestConfig) {
  const searchParams = new URLSearchParams();
  searchParams.append("cmd", cmd);
  Object.keys(params).forEach(key => {
    searchParams.append(key, params[key]);
  });
  return request.post<T>(`/${cmd}`, searchParams, config);
}
