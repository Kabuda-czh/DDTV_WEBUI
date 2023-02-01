/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:10:10
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 17:57:37
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
 * @param {String} userName - 用户名
 * @param {String} password - 密码
 *
 * 返回值为
 * @returns {Promise<RequestResult<Cookie>>} {@link ApiAuth.Cookie}
 */
export function fetchLogin(userName: string, password: string) {
  return fetchApiByPost<ApiAuth.Cookie>("Login", { UserName: userName, Password: password });
}

/**
 * 获取登陆状态
 *
 * 返回值为
 * @returns {Promise<RequestResult<LoginStatus>>} {@link ApiAuth.LoginStatus}
 */
export function fetchLoginState() {
  return fetchApiByPost<ApiAuth.LoginStatus>("Login_State");
}
