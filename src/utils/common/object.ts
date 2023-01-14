/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:27:19
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:27:58
 * @FilePath: \DDTV_WEBUI\src\utils\common\object.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
/** 设置对象数据 */
export function objectAssign<T extends Record<string, any>>(target: T, source: Partial<T>) {
  Object.assign(target, source);
}
