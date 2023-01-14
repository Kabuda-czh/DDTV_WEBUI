/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:10:18
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:54:28
 * @FilePath: \DDTV_WEBUI\src\hooks\common\useLoading.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import useBoolean from "./useBoolean";

export default function useLoading(initValue = false) {
  const { bool: loading, setTrue: startLoading, setFalse: endLoading } = useBoolean(initValue);

  return {
    loading,
    startLoading,
    endLoading
  };
}
