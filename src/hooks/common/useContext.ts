/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-14 23:10:18
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:54:24
 * @FilePath: \DDTV_WEBUI\src\hooks\common\useContext.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { inject, provide } from "vue";
import type { InjectionKey } from "vue";

/** 创建共享上下文状态 */
export default function useContext<T>(contextName = "context") {
  const injectKey: InjectionKey<T> = Symbol(contextName);

  function useProvide(context: T) {
    provide(injectKey, context);
    return context;
  }

  function useInject() {
    return inject(injectKey) as T;
  }

  return {
    useProvide,
    useInject
  };
}
