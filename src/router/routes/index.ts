/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 01:15:12
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 13:11:31
 * @FilePath: \DDTV_WEBUI\src\router\routes\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

/** 固定的路由 */
export const constantRoutes: AuthRoute.Route[] = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/system-view/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      // icon: "home-filled",
      title: "首页",
      requiresAuth: true,
      order: 1
    }
  }
];
