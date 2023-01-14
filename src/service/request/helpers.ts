/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 02:21:42
 * @FilePath: \DDTV_WEBUI\src\service\request\helpers.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { useAuthStore } from "@/store";
import { getRefreshToken, setRefreshToken, setToken } from "@/utils";
import type { AxiosRequestConfig } from "axios";
import { fetchUpdateToken } from "../api";

/**
 * 刷新token
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
  const { resetAuthStore } = useAuthStore();
  const refreshToken = getRefreshToken();
  const { data } = await fetchUpdateToken(refreshToken);
  if (data) {
    setToken(data.token);
    setRefreshToken(data.refreshToken);
    const config = { ...axiosConfig };
    if (config.headers) {
      (config.headers as any).Authorization = data.token;
    }
    return config;
  }

  resetAuthStore();
  return null;
}
