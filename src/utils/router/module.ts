/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 01:30:58
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:31:20
 * @FilePath: \DDTV_WEBUI\src\utils\router\module.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
/**
 * 权限路由排序
 * @param routes - 权限路由
 */
function sortRoutes(routes: AuthRoute.Route[]) {
  return routes.sort((next, pre) => Number(next.meta?.order) - Number(pre.meta?.order));
}

/**
 * 处理全部导入的路由模块
 * @param modules - 路由模块
 */
export function handleModuleRoutes(modules: AuthRoute.RouteModule) {
  const routes: AuthRoute.Route[] = [];

  Object.keys(modules).forEach(key => {
    const item = modules[key].default;
    if (item) {
      routes.push(item);
    } else {
      window.console.error(`路由模块解析出错: key = ${key}`);
    }
  });

  return sortRoutes(routes);
}
