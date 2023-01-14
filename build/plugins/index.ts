/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:57:56
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:04:21
 * @FilePath: \DDTV_WEBUI\build\plugins\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import vue from "@vitejs/plugin-vue";
import type { PluginOption } from "vite";
import html from "./html";
import unplugin from "./unplugin";

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  // const plugins = [vue(), html(viteEnv), ...unplugin(viteEnv)];
  const plugins = [vue(), html(viteEnv), ...unplugin()];

  return plugins;
}
