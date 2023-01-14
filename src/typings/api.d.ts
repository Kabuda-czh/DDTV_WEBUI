/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:11:42
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:11:48
 * @FilePath: \DDTV_WEBUI\src\typings\api.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    token: string;
    refreshToken: string;
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo;
}
