/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 22:52:38
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:44:58
 * @FilePath: \DDTV_WEBUI\src\store\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { createPinia } from "pinia";
import type { App } from "vue";
import { resetSetupStore } from "./plugins";

export function setupStore(app: App<Element>) {
  const store = createPinia();
  store.use(resetSetupStore);

  app.use(store);
}

export * from "./modules";
