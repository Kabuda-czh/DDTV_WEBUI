/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 01:18:56
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:22:58
 * @FilePath: \DDTV_WEBUI\src\router\routes\home.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

// const Layout = () => import("/@/layout/index.vue");

const homeRouter = {
  // path: "/",
  // name: "home",
  // component: Layout,
  // redirect: "/welcome",
  // meta: {
  //   icon: "home-filled",
  //   title: "首页",
  //   rank: 0
  // },
  // children: [
  //   {
  //     path: "/welcome",
  //     name: "welcome",
  //     component: () => import("/@/views/welcome/index2.vue"),
  //     meta: {
  //       title: "首页"
  //     }
  //   }
  // ]
  path: "/",
  name: "home",
  component: () => import("@/views/HomeView.vue"),
  meta: {
    // icon: "home-filled",
    title: "首页",
    order: 1
  }
};

export default homeRouter;
