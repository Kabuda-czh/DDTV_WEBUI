/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:12:33
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 01:43:52
 * @FilePath: \DDTV_WEBUI\src\typings\business.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
/** 用户相关模块 */
declare namespace Auth {
  /**
   * 用户角色类型(前端静态路由用角色类型进行路由权限的控制)
   * - super: 超级管理员(该权限具有所有路由数据)
   * - admin: 管理员
   * - user: 用户
   * - custom: 自定义角色
   */
  type RoleType = keyof typeof import("@/enum").EnumUserRole;

  // TODO: 需要对接正确的userInfo
  /** 用户信息 */
  interface UserInfo {
    /** 用户id */
    userId: string;
    /** 用户名 */
    userName: string;
    /** 用户角色类型 */
    userRole: RoleType;
  }
}
