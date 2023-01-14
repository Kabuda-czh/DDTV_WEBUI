/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 03:16:55
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 03:17:00
 * @FilePath: \DDTV_WEBUI\src\views\system-view\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import type { Component } from "vue";

type ViewComponent = Record<string, () => Promise<Component>>;

const importViews = import.meta.glob("./**/index.vue") as ViewComponent;

const COMPONENTS_KEY = "components";
const PREFIX = "./";
const SUFFIX = "/index.vue";
const PATH_SPLIT_MARK = "/";
const ROUTE_KEY_SPLIT_MARK = "_";
/** 系统的内置路由，该文件夹名称不作为RouteKey */
const SYSTEM_VIEW = "system-view_";

/** 过滤掉组件文件 */
const viewKeys = Object.keys(importViews).filter(key => !key.includes(COMPONENTS_KEY));

function getViewComponent() {
  const components: ViewComponent = {};
  viewKeys.forEach(key => {
    const routeKey = key
      .replace(PREFIX, "")
      .replace(SUFFIX, "")
      .replace(new RegExp(PATH_SPLIT_MARK, "g"), ROUTE_KEY_SPLIT_MARK)
      .replace(SYSTEM_VIEW, "");
    components[routeKey] = importViews[key];
  });
  return components;
}

export const views = getViewComponent();
