/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:10:18
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:54:31
 * @FilePath: \DDTV_WEBUI\src\hooks\common\useLoadingEmpty.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import useBoolean from "./useBoolean";

export default function useLoadingEmpty(initLoading = false, initEmpty = false) {
  const { bool: loading, setTrue: startLoading, setFalse: endLoading } = useBoolean(initLoading);
  const { bool: empty, setBool: setEmpty } = useBoolean(initEmpty);

  return {
    loading,
    startLoading,
    endLoading,
    empty,
    setEmpty
  };
}
