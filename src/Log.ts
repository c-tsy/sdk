import { Request, Base } from "./"

/**
* gitee.com.tansuyun.tgo.tlog.api.SearchLogReq
*/
export class EntitySearchLogReq extends Base {
    /**
    *  
    * 关键词查询的关键词内容，支持空格分隔 
    */
    Keyword: string = "";

    /**
    *  
    * 分页页码 
    */
    P: number = 1;

    /**
    *  
    * 每一页的条目数量 
    */
    N: number = 10;

    /**
    *  
    * 查询条件，请参考构建文档完成构建工作 
    */
    W: number = 0;

    /**
    *  
    * 排序条件 
    */
    Sort: string = "";

    /**
    *  
    * 要查询的条目字段范围 
    */
    Fields: string[] = [];

}
/**
* interface
*/
export class Entityinterface extends Base {

}
/**
* gitee.com.tansuyun.tgo.tlog.api.SearchLogRes
*/
export class EntitySearchLogRes extends Base {
    /**
    *  
    * 分页页码 
    */
    P: number = 0;

    /**
    *  
    * 每一页的条目数量 
    */
    N: number = 0;

    /**
    *  
    * 符合条件的累计条目数量 
    */
    T: number = 0;

    /**
    *  
    *  
    */
    L: EntityOpLog[] = [];

    /**
    *  
    * 响应数据的统计信息或额外信息 
    */
    R: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tlog.model.OpLog
*/
export class EntityOpLog extends Base {
    /**
    *  
    * 记录编号 
    */
    LID: number = 0;

    /**
    *  
    * 日志时间 
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    AID: number = 0;

    /**
    *  
    *  
    */
    GID: number = 0;

    /**
    *  
    * SaaS分割键 
    */
    Key: string = "";

    /**
    *  
    * 日志类型 
    */
    Type: string = "";

    /**
    *  
    * 标记请求路径，可用于区分日志形式 
    */
    Path: string = "";

    /**
    *  
    * 用户 
    */
    UID: number = 0;

    /**
    *  
    * 状态码 
    */
    Code: number = 0;

    /**
    *  
    * 消息提示 
    */
    Msg: string = "";

    /**
    *  
    * 所在部门 
    */
    UnitID: string = "";

    /**
    *  
    *  
    */
    Data: any = {};

    /**
    *  
    * IP地址 
    */
    IP: string = "";

    /**
    *  
    * 请求的跟踪标识 
    */
    Trace: string = "";

    /**
    *  
    * 模块 
    */
    Module: string = "";

    /**
    *  
    * 设备号 
    */
    Device: string = "";

    /**
    *  
    * 客户端平台，如 iphone/weixin/alipay/weixinmini 等 
    */
    Platform: string = "";

    /**
    *  
    * 客户端版本 
    */
    CVer: number = 0;

    /**
    *  
    * 服务端版本 
    */
    SVer: number = 0;

    /**
    *  
    * 网络环境，0LAN，1Wifi，2 4G，3 5G，4 NB，5 
    */
    Net: number = 0;

    /**
    *  
    * 服务端节点，用于标识服务端的节点名，默认取服务器的Hostname 
    */
    Node: string = "";

}
export class Log extends Request {
    Class = "Log";
    /**
    * 日志搜索
    * 
    * @param d {EntitySearchLogReq}
    * @return EntitySearchLogRes
    */
    async search(d: EntitySearchLogReq): Promise<EntitySearchLogRes> {
        return this._post(this.Class + `/search`, d)
    }
}
export const LogApi = new Log()