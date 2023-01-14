/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:06:45
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:01:22
 * @FilePath: \DDTV_WEBUI\src\typings\global.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
interface Window {
  $message?: import("element-plus").Message;
  $notification?: import("element-plus").Notify;
  $loadingBar?: import("nprogress").NProgress;
}

/** 通用类型 */
declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void];
}

/** 构建时间 */
declare const PROJECT_BUILD_TIME: string;
