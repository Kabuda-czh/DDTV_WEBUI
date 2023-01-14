/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 22:42:43
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 02:54:20
 * @FilePath: \DDTV_WEBUI\src\main.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import ElementPlus from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import { createApp } from "vue";
import "./index.css";
import { setupAssets } from "./plugins";
import { setupRouter } from "./router";
import { setupStore } from "./store";

import App from "./App.vue";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

async function setupApp() {
  // import assets: js、css
  setupAssets();

  const app = createApp(App);

  // vue router
  await setupRouter(app);

  // store plugin: pinia
  setupStore(app);

  // TODO: vue custom directives ?
  ///////////////////////////////

  app.use(ElementPlus, { locale: zhCn });

  // 全局注册`@element-plus/icons-vue`图标库
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }

  // mount app
  app.mount("#app");
}

setupApp();
