/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:38:22
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-14 23:39:51
 * @FilePath: \DDTV_WEBUI\src\typings\env.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

/**
 *后台服务的环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = "dev" | "test" | "prod";

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
  /** 请求地址 */
  url: string;
  /** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
  urlPattern: "/url-pattern";
  /** 另一个后端请求地址(有多个不同的后端服务时) */
  secondUrl: string;
  /** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
  secondUrlPattern: "/second-url-pattern";
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /** 后端服务的环境类型 */
  readonly VITE_SERVICE_ENV?: ServiceEnvType;
  /** 开启请求代理 */
  readonly VITE_HTTP_PROXY?: "Y" | "N";
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: "Y" | "N";
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS?: "Y" | "N";
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE?: "gzip" | "brotliCompress" | "deflate" | "deflateRaw";
  /** 是否应用pwa */
  readonly VITE_PWA?: "Y" | "N";
  /** hash路由模式 */
  readonly VITE_HASH_ROUTE?: "Y" | "N";
  /** 是否是部署的vercel */
  readonly VITE_VERCEL?: "Y" | "N";
}
