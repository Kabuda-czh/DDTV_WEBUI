/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:10:18
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:54:35
 * @FilePath: \DDTV_WEBUI\src\hooks\common\useReload.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { nextTick } from "vue";
import useBoolean from "./useBoolean";

/** 重载 */
export default function useReload() {
  // 重载的标志
  const { bool: reloadFlag, setTrue, setFalse } = useBoolean(true);

  /**
   * 触发重载
   * @param duration - 延迟时间(ms)
   */
  async function handleReload(duration = 0) {
    setFalse();
    await nextTick();

    if (duration > 0) {
      setTimeout(() => {
        setTrue();
      }, duration);
    }
  }

  return {
    reloadFlag,
    handleReload
  };
}
