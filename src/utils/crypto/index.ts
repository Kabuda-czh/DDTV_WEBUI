/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:32:48
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-15 00:32:52
 * @FilePath: \DDTV_WEBUI\src\utils\crypto\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
import CryptoJS from "crypto-js";

const CryptoSecret = "__CryptoJS_Secret__";

/**
 * 加密数据
 * @param data - 数据
 */
export function encrypto(data: any) {
  const newData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypto(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
