/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:15:19
 * @FilePath: \DDTV_WEBUI\src\service\api\auth.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { request } from "../request";

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return request.post<boolean>("/getSmsCode", { phone });
}

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string) {
  return request.post<ApiAuth.Token>("/login", { userName, password });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>("/getUserInfo");
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
// export function fetchUserRoutes(userId: string) {
//   return request.post<ApiRoute.Route>("/getUserRoutes", { userId });
// }

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
  return request.post<ApiAuth.Token>("/updateToken", { refreshToken });
}