/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:09:12
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:56:44
 * @FilePath: \DDTV_WEBUI\src\store\modules\setup-store\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { useBoolean } from "@/hooks";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useSetupStore = defineStore("setup-store", () => {
  const { bool: visible, setTrue: show, setFalse: hide } = useBoolean();

  interface Config {
    name: string;
  }

  const config = reactive<Config>({ name: "config" });

  /** 设置配置 */
  function setConfig(conf: Partial<Config>) {
    Object.assign(config, conf);
  }

  return {
    visible,
    show,
    hide,
    config,
    setConfig
  };
});
