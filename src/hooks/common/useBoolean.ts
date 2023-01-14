/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:10:18
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:54:20
 * @FilePath: \DDTV_WEBUI\src\hooks\common\useBoolean.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { ref } from "vue";

/**
 * boolean组合式函数
 * @param initValue 初始值
 */
export default function useBoolean(initValue = false) {
  const bool = ref(initValue);

  function setBool(value: boolean) {
    bool.value = value;
  }
  function setTrue() {
    setBool(true);
  }
  function setFalse() {
    setBool(false);
  }
  function toggle() {
    setBool(!bool.value);
  }

  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle
  };
}
