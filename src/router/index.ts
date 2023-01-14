/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:47:51
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 03:31:23
 * @FilePath: \DDTV_WEBUI\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { transformAuthRoutesToVueRoutes } from "@/utils";
import type { App } from "vue";
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { createRouterGuard } from "./guard";
import { constantRoutes } from "./routes";

const { VITE_HASH_ROUTE = "N", VITE_BASE_URL } = import.meta.env;

export const router = createRouter({
  history: VITE_HASH_ROUTE === "Y" ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformAuthRoutesToVueRoutes(constantRoutes)
});

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}
