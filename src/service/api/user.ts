/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 17:12:57
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 17:16:43
 * @FilePath: \DDTV_WEBUI\src\service\api\user.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 通过B站搜索搜索直播用户
 *
 * @param {String} keyword 需要搜索的关键词
 *
 * 返回值为
 * @returns {Promise<RequestResult<UserSearch>>} {@link ApiAuth.UserSearch}
 */
export function fetchUserSearch(keyword: string) {
  return fetchApiByPost<ApiAuth.UserSearch>("User_Search", { keyword });
}
