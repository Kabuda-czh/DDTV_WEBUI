/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:05:24
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-14 23:05:35
 * @FilePath: \DDTV_WEBUI\src\stores\plugins\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { cloneDeep } from "lodash-es";
import type { PiniaPluginContext } from "pinia";

/**
 * setup语法的重置状态插件
 * @param context
 * @description 请将用setup语法的状态id写入到setupSyntaxIds
 */
export function resetSetupStore(context: PiniaPluginContext) {
  const setupSyntaxIds = ["setup-store"];

  if (setupSyntaxIds.includes(context.store.$id)) {
    const { $state } = context.store;

    const defaultStore = cloneDeep($state);

    context.store.$reset = () => {
      context.store.$patch(defaultStore);
    };
  }
}
