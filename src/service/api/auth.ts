/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 14:56:37
 * @FilePath: \DDTV_WEBUI\src\service\api\auth.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
// export function fetchSmsCode(phone: string) {
//   return request.post<boolean>("/getSmsCode", { phone });
// }

/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string) {
  // return request.post<ApiAuth.Cookie>("/login", { userName, password });
  return fetchApiByPost<ApiAuth.Cookie>("Login", { UserName: userName, Password: password });
}

/** 获取用户信息 */
// export function fetchUserInfo() {
//   return request.get<any>("/getUserInfo");
// }

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
// export function fetchUserRoutes(userId: string) {
//   return request.post<ApiRoute.Route>("/getUserRoutes", { userId });
// }

/**
 * 获取登陆状态
 * @param refreshToken
 */
export function fetchLoginState() {
  // return request.post<ApiAuth.Cookie>("/Login_State");
  return fetchApiByPost("Login_State");
}
