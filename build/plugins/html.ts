/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:55:35
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-14 23:55:40
 * @FilePath: \DDTV_WEBUI\build\plugins\html.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import type { PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

export default (viteEnv: ImportMetaEnv): PluginOption[] => {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        appName: viteEnv.VITE_APP_NAME,
        appTitle: viteEnv.VITE_APP_TITLE
      }
    }
  });
};
