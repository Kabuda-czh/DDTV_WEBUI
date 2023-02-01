/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 16:58:42
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 17:53:25
 * @FilePath: \DDTV_WEBUI\src\service\api\room.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 获取房间详细配置信息
 *
 * 注意事项 该接口根据服务器上房间配置的多少决定，数据量可能会较多；
 * 在启动成功前30秒最好不要调用，该阶段属于API请求更新数据阶段，可能为空的数据较多。
 *
 * 返回值为
 * @returns {Promise<RequestResult<RoomAllInfo[]>>} {@link ApiAuth.RoomAllInfo}
 */
export function fetchRoomAllInfo() {
  return fetchApiByPost<ApiAuth.RoomAllInfo[]>("Room_AllInfo");
}

/**
 * 获取房间简要配置信息
 *
 * 注意事项 该接口根据服务器上房间配置的多少决定，数据量可能会较多；
 * 在启动成功前30秒最好不要调用，该阶段属于API请求更新数据阶段，可能为空的数据较多。
 *
 * 返回值为
 * @returns {Promise<RequestResult<RoomSummaryInfo[]>>} {@link ApiAuth.RoomSummaryInfo}
 */
export function fetchRoomSummaryInfo() {
  return fetchApiByPost<ApiAuth.RoomSummaryInfo[]>("Room_SummaryInfo");
}

/**
 * 增加一个加房间配置
 *
 * 注意事项 该接口的调用频率不能超过3秒/次，该接口后面封装的B站原生API较为复杂，
 * 如果请求过多，可能会造成频率过高导致412鉴权错误导致IP被黑名单半小时左右。
 *
 * @param {Number} uid 要增加到房间配置中的账号UID
 *
 * 返回值为
 * @returns {Promise<RequestResult<string>>} 返回数据说明
 */
export function fetchRoomAdd(uid: number) {
  return fetchApiByPost<string>("Room_Add", { UID: uid });
}

/**
 * 删除一个房间配置
 *
 * @param {Number} uid 要删除房间配置中的账号UID
 *
 * 返回值为
 * @returns {Promise<RequestResult<string>>} 返回数据说明
 */
export function fetchRoomDel(uid: number) {
  return fetchApiByPost<string>("Room_Del", { UID: uid });
}

/**
 * 修改房间自动录制配置
 *
 * @param {Number} uid 要修改自动录制配置的账号UID
 * @param {Boolean} isAutoRec 打开\关闭开播自动录制
 *
 * 返回值为
 * @returns {Promise<RequestResult<string>>} 返回数据说明
 */
export function fetchRoomAutoRec(uid: number, isAutoRec: boolean) {
  return fetchApiByPost<string>("Room_AutoRec", { UID: uid, IsAutoRec: isAutoRec });
}

/**
 * 修改房间弹幕录制配置
 *
 * @param {Number} uid 要修改弹幕录制配置的账号UID
 * @param {Boolean} isRecDanmu 打开\关闭该房间的弹幕录制功能
 *
 * 返回值为
 * @returns {Promise<RequestResult<string>>} 返回数据说明
 */
export function fetchRoomDanmuRec(uid: number, isRecDanmu: boolean) {
  return fetchApiByPost<string>("Room_DanmuRec", { UID: uid, IsRecDanmu: isRecDanmu });
}
