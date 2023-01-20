/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 14:28:49
 * @FilePath: \DDTV_WEBUI\src\service\request\instance.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { COOKIE_INVALID_CODE } from "@/config";
import { useAuthStore } from "@/store";
import {
  getToken,
  handleAxiosError,
  handleBackendError,
  handleResponseError,
  handleServiceResult,
  transformRequestData
} from "@/utils";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import axios, { AxiosResponse } from "axios";

/**
 * 封装axios请求类
 * @author Soybean<honghuangdc@gmail.com>
 */
export default class CustomAxiosInstance {
  instance: AxiosInstance;

  backendConfig: Service.BackendResultConfig;

  /**
   *
   * @param axiosConfig - axios配置
   * @param backendConfig - 后端返回的数据配置
   */
  constructor(
    axiosConfig: AxiosRequestConfig,
    backendConfig: Service.BackendResultConfig = {
      code: "code",
      cmd: "data",
      message: "message"
    }
  ) {
    this.backendConfig = backendConfig;
    this.instance = axios.create(axiosConfig);
    this.setInterceptor();
  }

  /** 设置请求拦截器 */
  setInterceptor() {
    this.instance.interceptors.request.use(
      async config => {
        const handleConfig = { ...config };
        if (handleConfig.headers) {
          // 数据转换
          const contentType = (handleConfig.headers as AxiosRequestHeaders)["Content-Type"] as string;
          handleConfig.data = await transformRequestData(handleConfig.data, contentType);
          // 设置token
          (handleConfig.headers as AxiosRequestHeaders).Authorization = getToken();
        }
        return handleConfig;
      },
      (axiosError: AxiosError) => {
        const error = handleAxiosError(axiosError);
        return handleServiceResult(error, null);
      }
    );
    this.instance.interceptors.response.use(
      (async (response: AxiosResponse<any, any>) => {
        const { status } = response;
        if (status === 200 || status < 300 || status === 304) {
          const backend = response.data;
          const { code, cmd } = this.backendConfig;

          // 请求成功
          if (backend[code] === 0) {
            return handleServiceResult(null, backend[cmd]);
          }

          // cookie失效
          if (COOKIE_INVALID_CODE.includes(backend[code])) {
            const { resetAuthStore } = useAuthStore();
            resetAuthStore();
          }

          const error = handleBackendError(backend, this.backendConfig);
          return handleServiceResult(error, null);
        }
        const error = handleResponseError(response);
        return handleServiceResult(error, null);
      }) as any,
      (axiosError: AxiosError) => {
        const error = handleAxiosError(axiosError);
        return handleServiceResult(error, null);
      }
    );
  }
}
