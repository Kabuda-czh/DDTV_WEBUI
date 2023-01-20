/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 14:19:29
 * @FilePath: \DDTV_WEBUI\src\service\request\helpers.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { useAuthStore } from "@/store";
// import { setToken } from "@/utils";
import type { AxiosRequestConfig } from "axios";
// import { fetchUpdateToken } from "../api";

/**
 * 请求登陆状态(暂时用不到)
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleLoginStatus(axiosConfig: AxiosRequestConfig) {
  const { resetAuthStore } = useAuthStore();
  // TODO: 需要请求登陆状态
  // const { data } = await fetchUpdateToken();
  // if (data) {
  //   setToken(data.token);
  //   setRefreshToken(data.refreshToken);
  //   const config = { ...axiosConfig };
  //   if (config.headers) {
  //     (config.headers as any).Authorization = data.token;
  //   }
  //   return config;
  // }

  resetAuthStore();
  return null;
}
