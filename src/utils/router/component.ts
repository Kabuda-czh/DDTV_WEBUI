/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 03:25:21
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 03:26:25
 * @FilePath: \DDTV_WEBUI\src\utils\router\component.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
// import { BasicLayout, BlankLayout } from "@/layouts";
import { views } from "@/views";
import type { Component } from "vue";

// type LayoutComponent = Record<EnumType.LayoutComponentName, () => Promise<Component>>;

/**
 * 获取页面导入的vue文件(懒加载的方式)
 * @param layoutType - 布局类型
 */
// export function getLayoutComponent(layoutType: EnumType.LayoutComponentName) {
//   const layoutComponent: LayoutComponent = {
//     basic: BasicLayout,
//     blank: BlankLayout
//   };
//   return layoutComponent[layoutType];
// }

/**
 * 获取页面导入的vue文件(懒加载的方式)
 * @param routeKey - 路由key
 */
export function getViewComponent(routeKey: AuthRoute.RouteKey) {
  if (!views[routeKey]) {
    window.console.error(`路由“${routeKey}”没有对应的组件文件！`);
  }
  return () => setViewComponentName(views[routeKey], routeKey) as Promise<Component>;
}

/** 给页面组件设置名称 */
async function setViewComponentName(asyncComponent: () => Promise<Component>, name: string) {
  const component = (await asyncComponent()) as { default: Component };
  Object.assign(component.default, { name });
  return component;
}
