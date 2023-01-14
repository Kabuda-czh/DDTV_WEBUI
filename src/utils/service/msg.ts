/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:23:03
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 02:26:44
 * @FilePath: \DDTV_WEBUI\src\utils\service\msg.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import { ERROR_MSG_DURATION, NO_ERROR_MSG_CODE } from "@/config";

/** 错误消息栈，防止同一错误同时出现 */
const errorMsgStack = new Map<string | number, string>([]);

function addErrorMsg(error: Service.RequestError) {
  errorMsgStack.set(error.code, error.msg);
}
function removeErrorMsg(error: Service.RequestError) {
  errorMsgStack.delete(error.code);
}
function hasErrorMsg(error: Service.RequestError) {
  return errorMsgStack.has(error.code);
}

/**
 * 显示错误信息
 * @param error
 */
export function showErrorMsg(error: Service.RequestError) {
  if (!error.msg || NO_ERROR_MSG_CODE.includes(error.code) || hasErrorMsg(error)) return;

  addErrorMsg(error);
  window.console.warn(error.code, error.msg);
  window.$message?.error({
    message: error.msg,
    duration: ERROR_MSG_DURATION
  });
  setTimeout(() => {
    removeErrorMsg(error);
  }, ERROR_MSG_DURATION);
}
