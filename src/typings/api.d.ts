/*
 * @Author: Kabuda-czh
 * @Date: 2023-01-15 00:11:42
 * @LastEditors: Kabuda-czh
 * @LastEditTime: 2023-01-20 19:28:50
 * @FilePath: \DDTV_WEBUI\src\typings\api.d.ts
 * @Description: 后端接口返回的数据类型
 *
 * Copyright (c) 2023 by Kabuda-czh, All Rights Reserved.
 */

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 用户的登陆 Cookie */
  type Cookie = string;

  /** 登陆状态: 0 - 未登录  1 - 已登陆   2 - 登陆失效   3 - 登陆中 */
  type LoginStatus = 0 | 1 | 2 | 3;

  /** system */
  /** 获取系统运行情况 */ //FIXME - 未完成
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

  /** 获取系统配置文件信息 */
  interface SystemConfig {
    /** 配置键 */
    Key: number;
    KeyName: string;
    /**
     * 配置分组:
     *
     * 0 - 缺省配置组(按道理应该给每个配置都设置组，不应该在缺省组里)
     *
     * 1 - DDTV_Core运行相关的配置
     *
     * 2 - 下载系统运行相关的配置
     *
     * 3 - WEBAPI相关的配置
     *
     * 4 - 播放器相关设置
     *
     * 5 - GUI相关设置
     */
    Group: number;
    /** 配置值 */
    Value: string;
    /** 是否有效 */
    Enabled: boolean;
  }

  /** 获取系统硬件资源使用情况 */
  interface SystemResources {
    /** 平台 */
    Platform: string;
    /** CPU使用率 */
    CPU_usage: number;
    /** 内存 */
    Memory: {
      /** 总计内存大小 */
      Total: number;
      /** 可用内存大小 */
      Available: number;
    };
    /** 硬盘信息 */
    HDDInfo: {
      /** 注册路径 */
      FileSystem: string;
      /** 硬盘大小 */
      Size: string;
      /** 已使用大小 */
      Used: string;
      /** 可用大小 */
      Avail: string;
      /** 使用率 */
      Usage: string;
      /** 挂载路径 */
      MountPath: string;
    }[];
  }

  /** 获取历史日志 */
  interface SystemLog {
    /** 总日志条数 */
    TotalLogs: number;
    /** 查询量的日志信息 */
    Logs: {
      /** 日志内容 */
      Message: string;
      /**
       * 日志类型:
       *
       * 10 - 会造成整个DDTV无法运行的严重错误
       *
       * 11 - 虽然现在还没发生问题，但是不管这个问题之后肯定会导致严重错误
       *
       * 20 - 会造成错误，但是不影响运行的警告
       *
       * 23 - 房间巡逻系统错误日志
       *
       * 30 - 系统一般消息
       *
       * 31 - 转码消息
       *
       * 32 - API消息
       *
       * 33 - IP协议版本消息
       *
       * 40 - 调试信息
       *
       * 41 - 调试信息
       *
       * 42 - DDcenter请求
       *
       * 43 - 调试信息
       *
       * 50, 51, 99 - 一些追踪数据
       *
       * 2147483647 - 打开所有日志
       */
      Type: number;
      /** 系统时间 */
      Time: string;
      /** 软件的运行时间 */
      RunningTime: number;
      /** 来源 */
      Source?: string;
      /** 需要写入txt记录的错误 */
      IsError: boolean;
      /** IsError为真时有效，记录错误详细信息 */
      exception?: any;
      /** 是否应该打印到终端 */
      IsDisplay: boolean;
    }[];
  }

  /** 获取最新日志 */ //FIXME - 未完成
  interface SystemLatestLog {
    /** ? */
    Message: string;
    /** ? */
    Type: number;
    /** ? */
    Time: string;
    /** ? */
    RunningTime: number;
    /** ? */
    Source: string;
    /** ? */
    IsError: boolean;
    /** ? */
    exception?: any;
    /** ? */
    IsDisplay: boolean;
  }

  /** config */
  /** 导入关注列表中的V */
  interface ConfigGetFollow {
    /** 主播 mid */
    mid: number;
    /** 房间id */
    roomid: number;
    /** 名称 */
    name: string;
  }

  /** File */
  /** 根据文件树结构返回已录制的文件总列表 */
  interface FileGetFilePathList {
    /** 文件名 */
    Name: string;
    /** 文件类型 */
    FileType: string;
    /** 文件大小(如果类型是文件夹则为0) */
    Size: number;
    /** 文件创建时间 */
    DateTime: string;
    /** 子文件夹 */
    children?: FileGetFilePathList[];
  }

  /** 分类获取已录制的文件总列表 */
  interface FileGetTypeFileList {
    /** 文件绝对路径数组 */
    files: string[];
    /** 文件类型 */
    Type: string;
  }

  /** Rec */
  /** 获取下载中的任务情况详细情况 */
  interface RecRecordingInfo {
    Token: string;
    /** 房间号 */
    RoomId: string;
    /** 用户UID */
    Uid: number;
    /** 昵称 */
    Name: string;
    /** 标题 */
    Title: string;
    /** FLV大小限制使能 */
    FlvSplit: boolean;
    /** FLV切割大小单位为byte */
    FlvSplitSize: number;
    /** 是否下载中 */
    IsDownloading: boolean;
    /** 下载地址 */
    Url: string;
    /** 下载的完整文件路径 */
    FileName: string;
    /** 文件夹路径 */
    FilePath: string;
    /** 开始时间 */
    StartTime: string;
    /** 结束时间 */
    EndTime: string;
    flvTimes?: any;
    /** FLV文件头 */
    FlvHeader?: any;
    /** FLV头脚本数据 */
    FlvScriptTag?: any;
    /** WebRequest类的HTTP的实现 */
    HttpWebRequest?: any;
    /** 当前已下载字节数 */
    DownloadCount: number;
    /** 该任务下所有任务的总下载字节数 */
    TotalDownloadCount: number;
    /** 下载状态: 0 - 新任务  1 - 已准备   2 - 下载中   3 - 下载结束   4 - 取消下载 */
    Status: 0 | 1 | 2 | 3 | 4;
  }

  /** 获取下载中的任务情况简略情况 */
  interface RecRecordingInfoLite {
    Token: string;
    /** 房间号 */
    RoomId: string;
    /** 用户UID */
    Uid: number;
    /** 标题 */
    Title: string;
    /** 文件夹路径 */
    FilePath: string;
    /** 开始时间(秒，Unix时间戳) */
    StartTime: string;
    /** 结束时间(秒，Unix时间戳) */
    EndTime: string;
    /** 该任务下所有子任务的总下载字节数 */
    TotalDownloadCount: number;
  }

  /** Room */
  /** 获取房间详细配置信息 */ //FIXME 有未知字段
  interface RoomAllInfo {
    /** ? */
    MonitoringSystem_Airtime: string;
    /** ? */
    MonitoringSystem_Attention: number;
    /** 标题 */
    title: string;
    /** 主播简介 */
    description?: any;
    /** 关注数 */
    attention: number;
    /** 直播间房间号(直播间实际房间号) */
    room_id: number;
    /** 主播mid */
    uid: number;
    /** 直播间在线人数 */
    online: number;
    /** 开播时间(未开播时为-62170012800,live_status为1时有效) */
    live_time: number;
    /** 直播状态(1为正在直播，2为轮播中) */
    live_status: number;
    /** 直播间房间号(直播间短房间号，常见于签约主播) */
    short_id: number;
    /** 直播间分区id */
    area: number;
    /** 直播间分区名 */
    area_name: string;
    /** 直播间新版分区id */
    area_v2_id: number;
    /** 直播间新版分区名 */
    area_v2_name: string;
    /** 直播间父分区名 */
    area_v2_parent_name: string;
    /** 直播间父分区id */
    area_v2_parent_id: number;
    /** 用户名 */
    uname: string;
    /** 主播头像url */
    face: string;
    /** 系统tag列表(以逗号分割) */
    tag_name: string;
    /** 用户自定义tag列表(以逗号分割) */
    tags: string;
    /** 直播封面图 */
    cover_from_user: string;
    /** 直播关键帧图 */
    keyframe: string;
    /** 直播间封禁信息 */
    lock_till: string;
    /** 直播间隐藏信息 */
    hidden_till: string;
    /** 直播类型(0:普通直播，1：手机直播) */
    broadcast_type: number;
    /** 是否p2p */
    need_p2p: number;
    /** 是否隐藏 */
    is_hidden: boolean;
    /** 是否锁定 */
    is_locked: boolean;
    /** 是否竖屏 */
    is_portrait: boolean;
    /** 是否加密 */
    encrypted: boolean;
    /** 加密房间是否通过密码验证(encrypted=true时才有意义) */
    pwd_verified: boolean;
    /** 未知 */
    room_shield: number;
    /** 是否为特殊直播间(0：普通直播间 1：付费直播间) */
    is_sp: number;
    /** 特殊直播间标志(0：普通直播间 1：付费直播间 2：拜年祭直播间) */
    special_type: number;
    /** ? */
    IsTemporaryPlay: boolean;
    /** 直播间状态(0:无房间 1:有房间) */
    roomStatus: number;
    /** 轮播状态(0：未轮播 1：轮播) */
    roundStatus: number;
    /** 直播间网页url */
    url: string;
    /** 描述(Local值) */
    Description?: any;
    /** 是否自动录制(Local值) */
    IsAutoRec: boolean;
    /** 是否开播提醒(Local值) */
    IsRemind: boolean;
    /** 是否录制弹幕(Local值) */
    IsRecDanmu: boolean;
    /** 特殊标记(Local值) */
    Like: boolean;
    /** 用户等级 */
    level: number;
    /** 主播性别 */
    sex?: any;
    /** 主播简介 */
    sign?: any;
    /** 房间的WS连接对象类 */
    roomWebSocket?: any;
    /** 下载标识符 */
    IsDownload: boolean;
    /** 房间当前下载任务记录 */
    DownloadingList?: any;
    /** 是否锁定 */
    IsUserCancel: boolean;
    /** 房间历史下载记录 */
    DownloadedLog?: any;
    /** 弹幕录制对象 */
    DanmuFile?: any;
    /** 是否正在被编辑 */
    IsCliping: boolean;
    /** 该房间当前的任务时间 */
    CreationTime: string;
    /** ? */
    DownloadedFileInfo: {
      /** ? */
      AfterRepairFiles: any[];
      /** ? */
      BeforeRepairFiles: any[];
      /** ? */
      DanMuFile?: any;
      /** ? */
      SCFile?: any;
      /** ? */
      GuardFile?: any;
      /** ? */
      GiftFile?: any;
    };
    /** ? */
    Shell: string;
    /** ? */
    Host: string;
    /** ? */
    Files: any[];
  }

  /** 获取房间简要配置信息 */
  interface RoomSummaryInfo {
    /** ? */
    MonitoringSystem_Airtime: string;
    /** ? */
    MonitoringSystem_Attention: number;
    /** ? */
    title: string;
    /** ? */
    description: string;
    /** ? */
    attention: number;
    /** 直播间房间号(直播间实际房间号) */
    room_id: number;
    /** 主播mid */
    uid: number;
    /** ? */
    online: number;
    /** ? */
    live_time: number;
    /** ? */
    live_status: number;
    /** ? */
    short_id: number;
    /** ? */
    area: number;
    /** ? */
    area_name: string;
    /** ? */
    area_v2_id: number;
    /** ? */
    area_v2_name: string;
    /** ? */
    area_v2_parent_name: string;
    /** ? */
    area_v2_parent_id: number;
    /** 用户名 */
    uname: string;
    /** ? */
    face: string;
    /** ? */
    tag_name: string;
    /** ? */
    tags: string;
    /** ? */
    cover_from_user: string;
    /** ? */
    keyframe: string;
    /** ? */
    lock_till: string;
    /** ? */
    hidden_till: string;
    /** ? */
    broadcast_type: number;
    /** ? */
    need_p2p: number;
    /** ? */
    is_hidden: boolean;
    /** ? */
    is_locked: boolean;
    /** ? */
    is_portrait: boolean;
    /** ? */
    encrypted: boolean;
    /** ? */
    pwd_verified: boolean;
    /** ? */
    room_shield: number;
    /** ? */
    is_sp: number;
    /** ? */
    special_type: number;
    /** ? */
    IsTemporaryPlay: boolean;
    /** ? */
    roomStatus: number;
    /** ? */
    roundStatus: number;
    /** ? */
    url: string;
    /** ? */
    Description: string;
    /** 是否自动录制(Local值) */
    IsAutoRec: boolean;
    /** 是否开播提醒(Local值) */
    IsRemind: boolean;
    /** 是否录制弹幕(Local值) */
    IsRecDanmu: boolean;
    /** 特殊标记(Local值) */
    Like: boolean;
    /** ? */
    level: number;
    /** ? */
    sex?: any;
    /** ? */
    sign?: any;
    /** ? */
    roomWebSocket: {
      /** ? */
      IsConnect: boolean;
      /** ? */
      dokiTime: number;
      /** ? */
      LiveChatListener: {
        /** ? */
        m_ReceiveBuffer?: any;
        /** ? */
        m_innerRts?: any;
        /** ? */
        TroomId: number;
        /** ? */
        startIn: boolean;
        /** ? */
        wss_S: string;
        /** ? */
        mid: number;
        /** ? */
        IsUserDispose: boolean;
        /** ? */
        IsWatchMode: boolean;
        /** ? */
        host?: any;
      };
    };
    /** 下载标识符 */
    IsDownload: boolean;
    /** ? */
    DownloadingList: any[];
    /** ? */
    IsUserCancel: boolean;
    /** ? */
    DownloadedLog: any[];
    /** ? */
    DanmuFile: {
      /** ? */
      FileName?: any;
      /** ? */
      TimeStopwatch?: any;
      /** ? */
      Danmu: any[];
      /** ? */
      SuperChat: any[];
      /** ? */
      Gift: any[];
      /** ? */
      GuardBuy: any[];
    };
    /** ? */
    IsCliping: boolean;
    /** ? */
    CreationTime: string;
    /** ? */
    DownloadedFileInfo: {
      /** ? */
      AfterRepairFiles: any[];
      /** ? */
      BeforeRepairFiles: any[];
      /** ? */
      DanMuFile?: any;
      /** ? */
      SCFile?: any;
      /** ? */
      GuardFile?: any;
      /** ? */
      GiftFile?: any;
    };
    /** ? */
    Shell: string;
    /** ? */
    Host: string;
    /** ? */
    Files: any[];
  }

  /** User */
  /** 通过B站搜索搜索直播用户 */ //FIXME 有未知字段
  interface UserSearch {
    /** ? */
    code: number;
    /** ? */
    message: string;
    /** ? */
    ttl: number;
    /** ? */
    data: {
      /** ? */
      seid: string;
      /** ? */
      page: number;
      /** ? */
      pagesize: number;
      /** ? */
      numResults: number;
      /** ? */
      numPages: number;
      /** ? */
      suggest_keyword: string;
      /** ? */
      rqt_type: string;
      /** ? */
      cost_time: {
        /** ? */
        params_check: string;
        /** ? */
        is_risk_query: string;
        /** ? */
        illegal_handler: string;
        /** ? */
        deserialize_response: string;
        /** ? */
        as_response_format: string;
        /** ? */
        as_request: string;
        /** ? */
        save_cache: string;
        /** ? */
        as_doc_request: string;
        /** ? */
        as_request_format: string;
        /** ? */
        total: string;
        /** ? */
        main_handler: string;
      };
      /** ? */
      exp_list: {
        /** ? */
        "5507": boolean;
        /** ? */
        "6602": boolean;
        /** ? */
        "7703": boolean;
        [x: string]: boolean | any;
      };
      /** ? */
      egg_hit: number;
      /** 返回数据说明 */
      result: {
        /** 搜索结果排名值 */
        rank_offset: number;
        /** 主播mid */
        uid: number;
        /** 直播间TAG 多个用,分隔 */
        tags: string;
        /** 结果类型 固定为live_user */
        type: string;
        /** 开播时间 YYYY-MM-DD HH:MM:SS 如未开播为 0000-00-00 00:00:00 */
        live_time: string;
        /** 关键字匹配类型 */
        hit_columns: string[];
        /** ? */
        cate_name: string;
        /** 是否开播 0：未开播 1：已开播 */
        live_status: number;
        /** 1 作用尚不明确 */
        area: number;
        /** 是否开播 false：未开播 true：已开播 */
        is_live: boolean;
        /** 主播昵称 关键字用xml标签<em class="keyword">标注 */
        uname: string;
        /** ? */
        area_v2_id: number;
        /** 主播头像url */
        uface: string;
        /** 0 作用尚不明确 */
        rank_index: number;
        /** 结果排序量化值 */
        rank_score: number;
        /** ? */
        roomid: number;
        /** 主播粉丝数 */
        attentions: number;
      }[];
      /** ? */
      show_column: number;
      /** ? */
      in_black_key: number;
      /** ? */
      in_white_key: number;
    };
  }
}
