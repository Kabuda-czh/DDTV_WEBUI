/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:14:56
 * @FilePath: \DDTV_WEBUI\src\service\request\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

import { getServiceEnvConfig } from "~/.env-config";
import { createRequest } from "./request";

const { url, urlPattern, secondUrl, secondUrlPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === "Y";

export const request = createRequest({ baseURL: isHttpProxy ? urlPattern : url });

export const secondRequest = createRequest({ baseURL: isHttpProxy ? secondUrlPattern : secondUrl });

export const mockRequest = createRequest({ baseURL: "/mock" });
