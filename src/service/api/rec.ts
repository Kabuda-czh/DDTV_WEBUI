/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 16:48:47
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 17:54:15
 * @FilePath: \DDTV_WEBUI\src\service\api\rec.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 获取录制中的任务情况详细情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<RecRecordingInfo>>} {@link ApiAuth.RecRecordingInfo}
 */
export function fetchRecRecordingInfo() {
  return fetchApiByPost<ApiAuth.RecRecordingInfo[]>("Rec_RecordingInfo");
}

/**
 * 获取录制中的任务情况简略情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<RecRecordingInfoLite>>} {@link ApiAuth.RecRecordingInfoLite}
 */
export function fetchRecRecordingInfoLite() {
  return fetchApiByPost<ApiAuth.RecRecordingInfoLite[]>("Rec_RecordingInfo_Lite");
}

/**
 * 获取已经录制完成的任务详细情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<RecRecordingInfo>>} {@link ApiAuth.RecRecordingInfo}
 */
export function fetchRecRecordCompleteInfon() {
  return fetchApiByPost<ApiAuth.RecRecordingInfo[]>("Rec_RecordCompleteInfon");
}

/**
 * 获取已经录制完成的任务简略情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<RecRecordingInfoLite>>} {@link ApiAuth.RecRecordingInfoLite}
 */
export function fetchRecordCompleteInfonLite() {
  return fetchApiByPost<ApiAuth.RecRecordingInfoLite[]>("Rec_RecordCompleteInfon_Lite");
}

/**
 * 取消某个录制任务
 *
 * @param {Number} uid 要取消任务的账号UID
 *
 * 返回值为
 * @returns {Promise<RequestResult<string>>} 返回数据说明
 */
export function fetchRecCancelDownload(uid: number) {
  return fetchApiByPost<string>("Rec_CancelDownload", { UID: uid });
}
