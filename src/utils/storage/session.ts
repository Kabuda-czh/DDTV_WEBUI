/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:32:20
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:33:51
 * @FilePath: \DDTV_WEBUI\src\utils\storage\session.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { decrypto, encrypto } from "../crypto";

export function setSession(key: string, value: unknown) {
  const json = encrypto(value);
  sessionStorage.setItem(key, json);
}

export function getSession<T>(key: string) {
  const json = sessionStorage.getItem(key);
  let data: T | null = null;
  if (json) {
    try {
      data = decrypto(json);
    } catch {
      // 防止解析失败
    }
  }
  return data;
}

export function removeSession(key: string) {
  window.sessionStorage.removeItem(key);
}

export function clearSession() {
  window.sessionStorage.clear();
}
