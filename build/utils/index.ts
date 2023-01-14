/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:01:56
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:02:00
 * @FilePath: \DDTV_WEBUI\build\utils\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

import path from "path";

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 */
export function getRootPath() {
  return path.resolve(process.cwd());
}

/**
 * 获取项目src路径
 * @param srcName - src目录名称(默认: "src")
 * @descrition 末尾不带斜杠
 */
export function getSrcPath(srcName = "src") {
  const rootPath = getRootPath();

  return `${rootPath}/${srcName}`;
}
