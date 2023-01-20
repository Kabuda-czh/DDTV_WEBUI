/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-20 16:16:51
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 16:32:04
 * @FilePath: \DDTV_WEBUI\src\service\api\config.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { fetchApiByPost } from "./utils";

/**
 * 设置自动转码总开关
 *
 * 注意事项 该接口需要依赖ffmpeg，请根据进阶功能说明中的自动转码页面的内容进行检查是否已经安装ffmpeg
 *
 * @param {Boolean} state 打开或者关闭自动转码开关调用
 * @returns {string} 提示信息
 */
export function fetchConfigTranscod(state: boolean) {
  return fetchApiByPost<string>("Config_Transcod", { state });
}

/**
 * 根据文件大小自动切片
 *
 * 注意事项 请勿输入1-10485760(1MB)的数值，在某些清晰度较高的直播间中，初始数据包会大于这个数值，这种情况下会报错
 *
 * @param {Number} size 设置自动分割文件大小(单位为byte)，为0时为关闭该功能
 * @returns {string} 提示信息
 */
export function fetchConfigFileSplit(size: number) {
  return fetchApiByPost<string>("Config_FileSplit", { size });
}

/**
 * 弹幕录制总共开关(包括礼物、舰队、SC)
 *
 * 注意事项 该弹幕录制接口总共开关包括礼物、舰队、SC的录制开关，
 * 并且个房间自己在房间配置列表单独设置，这个只是是否启用弹幕录制功能的总共开关，
 * 要录制某个房间除了打开这个设置还需要房间配置启动打开录制
 *
 * @param {Boolean} state 打开或关闭弹幕录制总开关
 * @returns {string} 提示信息
 */
export function fetchConfigDanmuRec(state: boolean) {
  return fetchApiByPost<string>("Config_DanmuRec", { state });
}

/**
 * 导入关注列表中的V
 *
 * 注意事项 该接口需要依赖哔哩哔哩账号登陆，使用前请确认已经扫码登陆
 *
 * @returns {Promise<RequestResult<onfigGetFollow>>} {@link ApiAuth.ConfigGetFollow}
 */
export function fetchConfigGetFollow() {
  return fetchApiByPost<ApiAuth.ConfigGetFollow>("Config_GetFollow");
}
