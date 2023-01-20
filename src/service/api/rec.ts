/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 16:48:47
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 16:58:13
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
 * @returns {Promise<RequestResult<?>>}
 */
export function fetchRecRecordingInfo() {
  //FIXME: 需提供返回值
  return fetchApiByPost("Rec_RecordingInfo");
}

/**
 * 获取录制中的任务情况简略情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<?>>}
 */
export function fetchRecRecordingInfoLite() {
  //FIXME: 需提供返回值
  return fetchApiByPost("Rec_RecordingInfo_Lite");
}

/**
 * 获取已经录制完成的任务详细情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<?>>}
 */
export function fetchRecRecordCompleteInfon() {
  //FIXME: 需提供返回值
  return fetchApiByPost("Rec_RecordCompleteInfon");
}

/**
 * 获取已经录制完成的任务简略情况
 *
 * 返回值为
 * @returns {Promise<RequestResult<?>>}
 */
export function fetchRecordCompleteInfonLite() {
  //FIXME: 需提供返回值
  return fetchApiByPost("Rec_RecordCompleteInfon_Lite");
}

/**
 * 取消某个录制任务
 *
 * 返回值为
 * @returns {Promise<RequestResult<?>>}
 */
export function fetchRecCancelDownload() {
  //FIXME: 需提供返回值
  return fetchApiByPost("Rec_CancelDownload");
}
