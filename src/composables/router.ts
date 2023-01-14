/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 01:42:43
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:42:56
 * @FilePath: \DDTV_WEBUI\src\composables\router.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { router as globalRouter } from "@/router";
import type { RouteLocationRaw } from "vue-router";
import { useRouter } from "vue-router";

/**
 * 路由跳转
 * @param inSetup - 是否在vue页面/组件的setup里面调用，在axios里面无法使用useRouter和useRoute
 */
export function useRouterPush(inSetup = true) {
  const router = inSetup ? useRouter() : globalRouter;
  const route = globalRouter.currentRoute;

  /**
   * 路由跳转
   * @param to - 需要跳转的路由
   * @param newTab - 是否在新的浏览器Tab标签打开
   */
  function routerPush(to: RouteLocationRaw, newTab = false) {
    if (newTab) {
      const routerData = router.resolve(to);
      window.open(routerData.href, "_blank");
    } else {
      router.push(to);
    }
  }

  /** 返回上一级路由 */
  function routerBack() {
    router.go(-1);
  }

  /**
   * 跳转首页
   * @param newTab - 在新的浏览器标签打开
   */
  function toHome(newTab = false) {
    routerPush({ name: "home" }, newTab);
  }

  /**
   * 跳转登录页面
   * @param loginModule - 展示的登录模块
   * @param redirectUrl - 重定向地址(登录成功后跳转的地址),默认undefined表示取当前地址为重定向地址
   */
  function toLogin(loginModule?: EnumType.LoginModuleKey, redirectUrl?: string) {
    const module: EnumType.LoginModuleKey = loginModule || "pwd-login";
    const routeLocation: RouteLocationRaw = {
      name: "login",
      params: { module }
    };
    const redirect = redirectUrl || route.value.fullPath;
    Object.assign(routeLocation, { query: { redirect } });
    routerPush(routeLocation);
  }

  /**
   * 登录页切换其他模块
   * @param module - 切换后的登录模块
   */
  function toLoginModule(module: EnumType.LoginModuleKey) {
    const { query } = route.value;
    routerPush({ name: "login", params: { module }, query });
  }

  /**
   * 登录成功后跳转重定向的地址
   */
  function toLoginRedirect() {
    const { query } = route.value;
    if (query?.redirect) {
      routerPush(query.redirect as string);
    } else {
      toHome();
    }
  }

  return {
    routerPush,
    routerBack,
    toHome,
    toLogin,
    toLoginModule,
    toLoginRedirect
  };
}
