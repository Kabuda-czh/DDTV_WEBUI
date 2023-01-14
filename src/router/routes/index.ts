/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 01:15:12
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:55:49
 * @FilePath: \DDTV_WEBUI\src\router\routes\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { handleModuleRoutes } from "@/utils";

const modules = import.meta.glob("./**/*.ts", { eager: true }) as AuthRoute.RouteModule;

export const routes = handleModuleRoutes(modules);
