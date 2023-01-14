/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:06:05
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:06:29
 * @FilePath: \DDTV_WEBUI\src\config\regexp.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
/** 手机号码正则 */
export const REGEXP_PHONE =
  /^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/;

/** 邮箱正则 */
export const REGEXP_EMAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

/** 密码正则(密码为6-18位数字/字符/符号的组合) */
export const REGEXP_PWD =
  /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,18}$/;

/** 6位数字验证码正则 */
export const REGEXP_CODE_SIX = /^\d{6}$/;

/** 4位数字验证码正则 */
export const REGEXP_CODE_FOUR = /^\d{4}$/;

/** url链接正则 */
export const REGEXP_URL =
  /(((^https?:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
