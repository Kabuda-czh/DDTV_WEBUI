/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:27:19
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:28:02
 * @FilePath: \DDTV_WEBUI\src\utils\common\pattern.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
/**
 * 策略模式
 * @param actions 每一种可能执行的操作
 */
export function exeStrategyActions(actions: Common.StrategyAction[]) {
  actions.some(item => {
    const [flag, action] = item;
    if (flag) {
      action();
    }
    return flag;
  });
}
