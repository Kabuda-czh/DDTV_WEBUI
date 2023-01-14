/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:04:00
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:04:26
 * @FilePath: \DDTV_WEBUI\build\config\define.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import dayjs from "dayjs";

/** 项目构建时间 */
const PROJECT_BUILD_TIME = JSON.stringify(dayjs().format("YYYY-MM-DD HH:mm:ss"));

export const viteDefine = {
  PROJECT_BUILD_TIME
};
