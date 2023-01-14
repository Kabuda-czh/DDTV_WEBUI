/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 01:15:12
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 03:34:11
 * @FilePath: \DDTV_WEBUI\src\router\routes\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

/** 根路由: / */
// export const ROOT_ROUTE: AuthRoute.Route = {
//   name: "root",
//   path: "/",
//   redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
//   meta: {
//     title: "Root"
//   }
// };

/** 固定的路由 */
export const constantRoutes: AuthRoute.Route[] = [
  // ROOT_ROUTE,
  // {
  //   name: "login",
  //   path: "/login",
  //   component: "self",
  //   meta: {
  //     title: "登录"
  //   }
  // },
  // {
  //   path: "/",
  //   name: "home",
  //   component: "self",
  //   meta: {
  //     // icon: "home-filled",
  //     title: "首页",
  //     order: 1
  //   }
  // },
  // // 匹配无效路径的路由
  // {
  //   name: "not-found-page",
  //   path: "/:pathMatch(.*)*",
  //   component: "blank",
  //   meta: {
  //     title: "未找到",
  //     singleLayout: "blank"
  //   }
  // }
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
