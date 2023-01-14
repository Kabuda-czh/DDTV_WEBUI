/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:37:28
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-14 23:41:34
 * @FilePath: \DDTV_WEBUI\.env-config.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: "http://localhost:8080",
    urlPattern: "/url-pattern",
    secondUrl: "http://localhost:8081",
    secondUrlPattern: "/second-url-pattern"
  },
  test: {
    url: "http://localhost:8080",
    urlPattern: "/url-pattern",
    secondUrl: "http://localhost:8081",
    secondUrlPattern: "/second-url-pattern"
  },
  prod: {
    url: "http://localhost:8080",
    urlPattern: "/url-pattern",
    secondUrl: "http://localhost:8081",
    secondUrlPattern: "/second-url-pattern"
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv) {
  const { VITE_SERVICE_ENV = "dev" } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return config;
}
