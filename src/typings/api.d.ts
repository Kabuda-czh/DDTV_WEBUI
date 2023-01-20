/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:11:42
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 17:15:48
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

  /** system */
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

  interface SystemResources {
    Platform: string;
    CPU_usage: number;
    Memory: {
      Total: number;
      Available: number;
    };
    HDDInfo: {
      FileSystem: string;
      Size: string;
      Used: string;
      Avail: string;
      Usage: string;
      MountPath: string;
    }[];
  }

  interface SystemLog {
    TotalLogs: number;
    Logs: {
      Message: string;
      Type: number;
      Time: string;
      RunningTime: number;
      Source: string;
      IsError: boolean;
      exception?: any;
      IsDisplay: boolean;
    }[];
  }

  interface SystemLatestLog {
    Message: string;
    Type: number;
    Time: string;
    RunningTime: number;
    Source: string;
    IsError: boolean;
    exception?: any;
    IsDisplay: boolean;
  }

  /** config */
  interface ConfigGetFollow {
    mid: number;
    roomid: number;
    name: string;
  }

  /** File */
  interface FileGetFilePathList {
    Name: string;
    FileType: string;
    Size: number;
    DateTime: string;
    children: {
      Name: string;
      FileType: string;
      Size: number;
      DateTime: string;
      children: {
        Name: string;
        FileType: string;
        Size: number;
        DateTime: string;
        children?: any;
      }[];
    }[];
  }

  interface FileGetTypeFileList {
    files: string[];
    Type: string;
  }

  /** Rec */

  /** Room */
  interface RoomAllInfo {
    MonitoringSystem_Airtime: string;
    MonitoringSystem_Attention: number;
    title: string;
    description?: any;
    attention: number;
    room_id: number;
    uid: number;
    online: number;
    live_time: number;
    live_status: number;
    short_id: number;
    area: number;
    area_name: string;
    area_v2_id: number;
    area_v2_name: string;
    area_v2_parent_name: string;
    area_v2_parent_id: number;
    uname: string;
    face: string;
    tag_name: string;
    tags: string;
    cover_from_user: string;
    keyframe: string;
    lock_till: string;
    hidden_till: string;
    broadcast_type: number;
    need_p2p: number;
    is_hidden: boolean;
    is_locked: boolean;
    is_portrait: boolean;
    encrypted: boolean;
    pwd_verified: boolean;
    room_shield: number;
    is_sp: number;
    special_type: number;
    IsTemporaryPlay: boolean;
    roomStatus: number;
    roundStatus: number;
    url: string;
    Description?: any;
    IsAutoRec: boolean;
    IsRemind: boolean;
    IsRecDanmu: boolean;
    Like: boolean;
    level: number;
    sex?: any;
    sign?: any;
    roomWebSocket?: any;
    IsDownload: boolean;
    DownloadingList?: any;
    IsUserCancel: boolean;
    DownloadedLog?: any;
    DanmuFile?: any;
    IsCliping: boolean;
    CreationTime: string;
    DownloadedFileInfo: {
      AfterRepairFiles: any[];
      BeforeRepairFiles: any[];
      DanMuFile?: any;
      SCFile?: any;
      GuardFile?: any;
      GiftFile?: any;
    };
    Shell: string;
    Host: string;
    Files: any[];
  }

  interface RoomSummaryInfo {
    MonitoringSystem_Airtime: string;
    MonitoringSystem_Attention: number;
    title: string;
    description: string;
    attention: number;
    room_id: number;
    uid: number;
    online: number;
    live_time: number;
    live_status: number;
    short_id: number;
    area: number;
    area_name: string;
    area_v2_id: number;
    area_v2_name: string;
    area_v2_parent_name: string;
    area_v2_parent_id: number;
    uname: string;
    face: string;
    tag_name: string;
    tags: string;
    cover_from_user: string;
    keyframe: string;
    lock_till: string;
    hidden_till: string;
    broadcast_type: number;
    need_p2p: number;
    is_hidden: boolean;
    is_locked: boolean;
    is_portrait: boolean;
    encrypted: boolean;
    pwd_verified: boolean;
    room_shield: number;
    is_sp: number;
    special_type: number;
    IsTemporaryPlay: boolean;
    roomStatus: number;
    roundStatus: number;
    url: string;
    Description: string;
    IsAutoRec: boolean;
    IsRemind: boolean;
    IsRecDanmu: boolean;
    Like: boolean;
    level: number;
    sex?: any;
    sign?: any;
    roomWebSocket: {
      IsConnect: boolean;
      dokiTime: number;
      LiveChatListener: {
        m_ReceiveBuffer?: any;
        m_innerRts?: any;
        TroomId: number;
        startIn: boolean;
        wss_S: string;
        mid: number;
        IsUserDispose: boolean;
        IsWatchMode: boolean;
        host?: any;
      };
    };
    IsDownload: boolean;
    DownloadingList: any[];
    IsUserCancel: boolean;
    DownloadedLog: any[];
    DanmuFile: {
      FileName?: any;
      TimeStopwatch?: any;
      Danmu: any[];
      SuperChat: any[];
      Gift: any[];
      GuardBuy: any[];
    };
    IsCliping: boolean;
    CreationTime: string;
    DownloadedFileInfo: {
      AfterRepairFiles: any[];
      BeforeRepairFiles: any[];
      DanMuFile?: any;
      SCFile?: any;
      GuardFile?: any;
      GiftFile?: any;
    };
    Shell: string;
    Host: string;
    Files: any[];
  }

  /** User */
  interface UserSearch {
    code: number;
    message: string;
    ttl: number;
    data: {
      seid: string;
      page: number;
      pagesize: number;
      numResults: number;
      numPages: number;
      suggest_keyword: string;
      rqt_type: string;
      cost_time: {
        params_check: string;
        is_risk_query: string;
        illegal_handler: string;
        deserialize_response: string;
        as_response_format: string;
        as_request: string;
        save_cache: string;
        as_doc_request: string;
        as_request_format: string;
        total: string;
        main_handler: string;
      };
      exp_list: {
        "5507": boolean;
        "6602": boolean;
        "7703": boolean;
        [x: string]: boolean | any;
      };
      egg_hit: number;
      result: {
        rank_offset: number;
        uid: number;
        tags: string;
        type: string;
        live_time: string;
        hit_columns: string[];
        cate_name: string;
        live_status: number;
        area: number;
        is_live: boolean;
        uname: string;
        area_v2_id: number;
        uface: string;
        rank_index: number;
        rank_score: number;
        roomid: number;
        attentions: number;
      }[];
      show_column: number;
      in_black_key: number;
      in_white_key: number;
    };
  }
}
