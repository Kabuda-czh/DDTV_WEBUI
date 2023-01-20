/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:11:42
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 15:06:17
 * @FilePath: \DDTV_WEBUI\src\typings\api.d.ts
 * @Description:
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */
// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  // interface Token {
  //   token: string;
  //   refreshToken: string;
  // }

  /** 返回的用户信息 */
  // type UserInfo = Auth.UserInfo;
  type Cookie = string;

  interface SystemInfo {
    DDTVCore_Ver: string;
    Room_Quantity: number;
    ServerName: string;
    ServerAID: string;
    os_Info: {
      OS_Ver: string;
      OS_Tpye: string;
      Memory_Usage: number;
      Runtime_Ver: string;
      UserInteractive: boolean;
      Associated_Users: string;
      Current_Directory: string;
      AppCore_Ver: string;
      WebCore_Ver: string;
    };
    download_Info: {
      Downloading: number;
      Completed_Downloads: number;
    };
  }

  interface SystemConfig {
    Key: number;
    KeyName: string;
    Group: number;
    Value: string;
    Enabled: boolean;
  }
}
