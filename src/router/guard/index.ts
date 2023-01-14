/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:47:51
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 02:16:12
 * @FilePath: \DDTV_WEBUI\src\router\guard\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { useTitle } from "@vueuse/core";
import type { Router } from "vue-router";
import { createPermissionGuard } from "./permission";

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    // 开始 loadingBar
    window.$loadingBar?.start();
    // 页面跳转权限处理
    await createPermissionGuard(to, from, next);
  });
  router.afterEach(to => {
    // 设置document title
    useTitle(to.meta.title as string);
    // 结束 loadingBar
    window.$loadingBar?.done();
  });
}
