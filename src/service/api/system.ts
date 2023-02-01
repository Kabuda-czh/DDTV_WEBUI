/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 14:59:01
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 18:01:45
 * @FilePath: \DDTV_WEBUI\src\service\api\system.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 获取系统运行情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<SystemInfo>>} {@link ApiAuth.SystemInfo}
 */
export function fetchSystemInfo() {
  return fetchApiByPost<ApiAuth.SystemInfo>("System_Info");
}

/**
 * 获取系统配置文件信息
 *
 * 返回值为
 * @returns {Promise<RequestResult<SystemConfig[]>>} {@link ApiAuth.SystemConfig}
 */
export function fetchSystemConfig() {
  return fetchApiByPost<ApiAuth.SystemConfig[]>("System_Config");
}

/**
 * 获取系统硬件资源使用情况
 * 注意事项 该接口消耗的系统硬件资源较高，请勿频繁调用！！！！！
 *
 * 返回值为
 * @returns {Promise<RequestResult<SystemResources>>} {@link ApiAuth.SystemResources}
 */
export function fetchSystemResources() {
  return fetchApiByPost<ApiAuth.SystemResources>("System_Resources");
}

/**
 * 获取历史日志
 *
 * @param {number} page 第几页
 * @param {number} quantity 每页多少条
 *
 * 返回值为
 * @returns {Promise<RequestResult<SystemLog>>} {@link ApiAuth.SystemLog}
 */
export function fetchSystemLog(page: number, quantity: number) {
  return fetchApiByPost<ApiAuth.SystemLog>("System_Log", { page, Quantity: quantity });
}

/**
 * 获取最新日志
 *
 * @param {number} quantity 最新的多少条
 *
 * 返回值为
 * @returns {Promise<RequestResult<SystemLatestLog[]>>} {@link ApiAuth.SystemLatestLog}
 */
export function fetchSystemLatestLog(quantity: number) {
  return fetchApiByPost<ApiAuth.SystemLatestLog[]>("System_LatestLog", { Quantity: quantity });
}

/**
 * 返回一个可以自行设定的初始化状态值(用于前端自行判断)
 * 注意事项 该接口用于前端自行判断，启动后默认值都为真，不能作为DDTV是否正在运行的参考
 *
 * 返回值为
 * @returns {Promise<RequestResult<boolean>>} 是否为第一次启动
 */
export function fetchSystemQueryWebFirstStart() {
  return fetchApiByPost<boolean>("System_QueryWebFirstStart");
}

/**
 * 设置初始化状态值
 * 注意事项 用于设置初始化状态值(WEB_FirstStart)；该值无实际的逻辑处理，用于前端自行判断使用。
 *
 * @param {Boolean} state 设置初始化状态值
 *
 * 返回值为
 * @returns {Promise<RequestResult<boolean>>} 是否设置成功
 */
export function fetchSystemSetWebFirstStart(state: boolean) {
  return fetchApiByPost<boolean>("System_SetWebFirstStart", { state });
}

/**
 * 用于判断用户登陆状态是否有效
 *
 * 注意事项
 *
 * 该接口应该是用于登陆状态是否有效的检测，检测到登陆状态失效就应该停止调用本接口，直到登陆状态恢复
 * 检测登陆中时是否登陆成功，应该使用 /api/LoingState 进行查询
 *
 * 返回值为
 * @returns {Promise<RequestResult<boolean>>} 用户登陆状态是否有效
 */
export function fetchSystemQueryUserState() {
  return fetchApiByPost<boolean>("System_QueryUserState");
}
