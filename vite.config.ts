/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 22:42:43
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 02:04:10
 * @FilePath: \DDTV_WEBUI\vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { defineConfig, loadEnv } from "vite";
import { getServiceEnvConfig } from "./.env-config";
import { createViteProxy, getRootPath, getSrcPath, setupVitePlugins, viteDefine } from "./build";

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;

  const rootPath = getRootPath();
  const srcPath = getSrcPath();

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === "Y";
  const envConfig = getServiceEnvConfig(viteEnv);

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        "~": rootPath,
        "@": srcPath
      }
    },
    define: viteDefine,
    plugins: setupVitePlugins(viteEnv),
    // css: {
    //   preprocessorOptions: {
    //     less: {
    //       additionalData: `@use "./src/styles/less/global.scss" as *;`
    //     }
    //   }
    // },
    server: {
      host: "0.0.0.0",
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig)
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false
      }
    }
  };
});
