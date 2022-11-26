import { Request, Base } from "./"
import md5 from 'md5'
/**
* gitee.com.tansuyun.tgo.tuser.api.LoginReq
*/
export class EntityLoginReq extends Base {
    /**
    *  
    * 用户账户 
    */
    Account: string = "";

    /**
    *  
    * 登录密码加Salt后的MD5值， 
    */
    PWD: string = "";

    /**
    *  
    * 是否使用第三方账号，此时Account为OpenID，密码为OpenID进行密码运算后的结果，可选值：Wechat/WechatMini/Alipay/AlipayMini/Dingding 
    */
    Type: string = "";

    /**
    *  
    * 需要验证码的情况下填写验证码 
    */
    Verify: string = "";

}
/**
* gitee.com.tansuyun.tgo.tbase.AuthRes
*/
export class EntityAuthRes extends Base {
    /**
    *  
    * 用户姓名 
    */
    Name: string = "";

    /**
    *  
    * 用户昵称 
    */
    Nick: string = "";

    /**
    *  
    * 头像 
    */
    Avatar: string = "";

    /**
    *  
    * 性别 0女 1男 2未知 
    */
    Sex: number = 0;

    /**
    *  
    * 状态 -1禁用 1正常 0异常 
    */
    Status: number = 0;

    /**
    *  
    * 渠道 
    */
    Channel: string = "";

    /**
    *  
    * 推介人 
    */
    PUID: number = 0;

    /**
    *  
    * 团队成员数 
    */
    CNum: number = 0;

    /**
    *  
    * 生日 
    */
    Birthday: Date | string = new Date;

    /**
    *  
    * 用户号 
    */
    UID: number = 0;

    /**
    *  
    * 用户组织编号 
    */
    Units: EntitySimUnit[] = [];

    /**
    *  
    * 应用编号 
    */
    AID: number = 0;

    /**
    *  
    * 企业或分组编号 
    */
    GID: number = 0;

    /**
    *  
    * SaaS应用分割 
    */
    Key: string = "";

    /**
    *  
    * 角色 
    */
    Rule: string = "";

    /**
    *  
    * 所在用户组数组 
    */
    Groups: EntitySimUserGroup[] = [];

    /**
    *  
    *  
    */
    Prefix: string = "";

    /**
    *  
    * JWT认证的字符串，用于跟第三方系统交互 
    */
    JWT: string = "";

    /**
    *  
    * JWT过期时间 
    */
    JWTExpire: Date | string = new Date;

}
/**
* gitee.com.tansuyun.tgo.tbase.SimUnit
*/
export class EntitySimUnit extends Base {
    /**
    *  
    * 组织编号 
    */
    UnitID: number = 0;

    /**
    *  
    * 组织名称 
    */
    Title: string = "";

    /**
    *  
    * 子节点数量 
    */
    CNum: number = 0;

    /**
    *  
    * 父节点编号 
    */
    PUnitID: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tbase.SimUserGroup
*/
export class EntitySimUserGroup extends Base {
    /**
    *  
    * 用户组名称 
    */
    Title: string = "";

    /**
    *  
    * 用户组编号 
    */
    UGID: number = 0;

    /**
    *  
    * 对应的组织编号 
    */
    UnitID: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.LogoutReq
*/
export class EntityLogoutReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tbase.EmptyRes
*/
export class EntityEmptyRes extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.QrLoginAcceptReq
*/
export class EntityQrLoginAcceptReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.QrLoginReq
*/
export class EntityQrLoginReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.QrLoginRes
*/
export class EntityQrLoginRes extends Base {
    /**
    *  
    * 展示给用户扫码的URL地址 
    */
    URL: string = "";

    /**
    *  
    * 扫码登录的Token认证 
    */
    Token: string = "";

}
/**
* gitee.com.tansuyun.tgo.tuser.api.QrLoginCheckReq
*/
export class EntityQrLoginCheckReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.RegistReq
*/
export class EntityRegistReq extends Base {
    /**
    *  
    * 账号名称 
    */
    Account: string = "";

    /**
    *  
    * 用户姓名 
    */
    Name: string = "";

    /**
    *  
    * 用户昵称 
    */
    Nick: string = "";

    /**
    *  
    * 头像 
    */
    Avatar: string = "";

    /**
    *  
    * 性别 0女 1男 2未知 
    */
    Sex: number = 0;

    /**
    *  
    * 推介人UID 
    */
    PUID: number = 0;

    /**
    *  
    * 所在用户组数组 
    */
    UGIDs: number[] = [];

    /**
    *  
    * 生日 
    */
    Birthday: Date | string = new Date;

    /**
    *  
    * 密码 
    */
    PWD: string = "";

    /**
    *  
    * 绑定微信或支付宝等第三方账号，主要用于微信自动注册逻辑，Wechat/WechatMini/Alipay/AlipayMini/DingDing 分别对应微信公众号，微信小程序，支付宝，支付宝小程序，钉钉 
    */
    Type: string = "";

    /**
    *  
    * 绑定的第三方账号的OpenID 
    */
    OpenID: string = "";

    /**
    *  
    * 注册成功后自动登录?默认不自动登录，当第三方自动绑定成功的情况下会自动设置成true 
    */
    Login: Boolean = false;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UIDRes
*/
export class EntityUIDRes extends Base {
    /**
    *  
    *  
    */
    UID: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.ReloginReq
*/
export class EntityReloginReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitGetReq
*/
export class EntityUnitGetReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitGetRes
*/
export class EntityUnitGetRes extends Base {
    /**
    *  
    *  
    */
    UnitID: number = 0;

    /**
    *  
    *  
    */
    PUnitID: number = 0;

    /**
    *  
    *  
    */
    Deep: number = 0;

    /**
    *  
    *  
    */
    TUnitID: number = 0;

    /**
    *  
    *  
    */
    CNum: number = 0;

    /**
    *  
    *  
    */
    Title: string = "";

    /**
    *  
    *  
    */
    Memo: string = "";

    /**
    *  
    *  
    */
    Code: string = "";

    /**
    *  
    *  
    */
    PY: string = "";

    /**
    *  
    *  
    */
    Icon: string = "";

    /**
    *  
    *  
    */
    Addr: string = "";

    /**
    *  
    *  
    */
    Name: string = "";

    /**
    *  
    *  
    */
    Tel: string = "";

    /**
    *  
    *  
    */
    X: number = 0;

    /**
    *  
    *  
    */
    Y: number = 0;

    /**
    *  
    *  
    */
    Sort: number = 0;

    /**
    *  
    * -1禁用1启用 
    */
    Status: number = 0;

    /**
    *  
    *  
    */
    CUID: number = 0;

    /**
    *  
    *  
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    AUID: number = 0;

    /**
    *  
    *  
    */
    UGID: number = 0;

    /**
    *  
    * 0自己1供应商2客户 
    */
    Type: number = 0;

    /**
    *  
    *  
    */
    GID: number = 0;

    /**
    *  
    *  
    */
    Key: string = "";

    /**
    *  
    *  
    */
    LTitle: string = "";

    /**
    *  
    *  
    */
    OType: string = "";

    /**
    *  
    *  
    */
    OID: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitAddsReq
*/
export class EntityUnitAddsReq extends Base {
    /**
    *  
    *  
    */
    L: EntityUnit[] = [];

}
/**
* gitee.com.tansuyun.tgo.tuser.entity.Unit
*/
export class EntityUnit extends Base {
    /**
    *  
    *  
    */
    UnitID: number = 0;

    /**
    *  
    *  
    */
    PUnitID: number = 0;

    /**
    *  
    *  
    */
    Deep: number = 0;

    /**
    *  
    *  
    */
    TUnitID: number = 0;

    /**
    *  
    *  
    */
    CNum: number = 0;

    /**
    *  
    *  
    */
    Title: string = "";

    /**
    *  
    *  
    */
    Memo: string = "";

    /**
    *  
    *  
    */
    Code: string = "";

    /**
    *  
    *  
    */
    PY: string = "";

    /**
    *  
    *  
    */
    Icon: string = "";

    /**
    *  
    *  
    */
    Addr: string = "";

    /**
    *  
    *  
    */
    Name: string = "";

    /**
    *  
    *  
    */
    Tel: string = "";

    /**
    *  
    *  
    */
    X: number = 0;

    /**
    *  
    *  
    */
    Y: number = 0;

    /**
    *  
    *  
    */
    Sort: number = 0;

    /**
    *  
    * -1禁用1启用 
    */
    Status: number = 0;

    /**
    *  
    *  
    */
    CUID: number = 0;

    /**
    *  
    *  
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    AUID: number = 0;

    /**
    *  
    *  
    */
    UGID: number = 0;

    /**
    *  
    * 0自己1供应商2客户 
    */
    Type: number = 0;

    /**
    *  
    *  
    */
    GID: number = 0;

    /**
    *  
    *  
    */
    Key: string = "";

    /**
    *  
    *  
    */
    LTitle: string = "";

    /**
    *  
    *  
    */
    OType: string = "";

    /**
    *  
    *  
    */
    OID: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tbase.SaveAddCommonRes
*/
export class EntitySaveAddCommonRes extends Base {
    /**
    *  
    * 添加或编辑影响的数量 
    */
    N: number = 0;

    /**
    *  
    * 结果数组 
    */
    L: number[] = [];

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitDelReq
*/
export class EntityUnitDelReq extends Base {
    /**
    *  
    * 要删除的组织编号清单 
    */
    UnitIDs: number[] = [];

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitSaveReq
*/
export class EntityUnitSaveReq extends Base {
    /**
    *  
    *  
    */
    UnitID: number = 0;

    /**
    *  
    *  
    */
    PUnitID: number = 0;

    /**
    *  
    *  
    */
    Deep: number = 0;

    /**
    *  
    *  
    */
    TUnitID: number = 0;

    /**
    *  
    *  
    */
    CNum: number = 0;

    /**
    *  
    *  
    */
    Title: string = "";

    /**
    *  
    *  
    */
    Memo: string = "";

    /**
    *  
    *  
    */
    Code: string = "";

    /**
    *  
    *  
    */
    PY: string = "";

    /**
    *  
    *  
    */
    Icon: string = "";

    /**
    *  
    *  
    */
    Addr: string = "";

    /**
    *  
    *  
    */
    Name: string = "";

    /**
    *  
    *  
    */
    Tel: string = "";

    /**
    *  
    *  
    */
    X: number = 0;

    /**
    *  
    *  
    */
    Y: number = 0;

    /**
    *  
    *  
    */
    Sort: number = 0;

    /**
    *  
    * -1禁用1启用 
    */
    Status: number = 0;

    /**
    *  
    *  
    */
    CUID: number = 0;

    /**
    *  
    *  
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    AUID: number = 0;

    /**
    *  
    *  
    */
    UGID: number = 0;

    /**
    *  
    * 0自己1供应商2客户 
    */
    Type: number = 0;

    /**
    *  
    *  
    */
    GID: number = 0;

    /**
    *  
    *  
    */
    Key: string = "";

    /**
    *  
    *  
    */
    LTitle: string = "";

    /**
    *  
    *  
    */
    OType: string = "";

    /**
    *  
    *  
    */
    OID: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitSearchReq
*/
export class EntityUnitSearchReq extends Base {
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
* gitee.com.tansuyun.tgo.tuser.api.UnitSearchRes
*/
export class EntityUnitSearchRes extends Base {
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
    L: EntityUnit[] = [];

    /**
    *  
    * 响应数据的统计信息或额外信息 
    */
    R: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitTreeReq
*/
export class EntityUnitTreeReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UnitTreeRes
*/
export class EntityUnitTreeRes extends Base {
    /**
    *  
    *  
    */
    T: number = 0;

    /**
    *  
    *  
    */
    L: EntitySimUnit[] = [];

    /**
    *  
    *  
    */
    P: number = 0;

    /**
    *  
    *  
    */
    N: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UserGetReq
*/
export class EntityUserGetReq extends Base {

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UserGetRes
*/
export class EntityUserGetRes extends Base {
    /**
    *  
    *  
    */
    UID: number = 0;

    /**
    *  
    *  
    */
    PUID: number = 0;

    /**
    *  
    *  
    */
    CNum: number = 0;

    /**
    *  
    *  
    */
    TUID: number = 0;

    /**
    *  
    *  
    */
    Deep: number = 0;

    /**
    *  
    *  
    */
    Name: string = "";

    /**
    *  
    *  
    */
    Avatar: string = "";

    /**
    *  
    *  
    */
    Nick: string = "";

    /**
    *  
    *  
    */
    Head: string = "";

    /**
    *  
    *  
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    CUID: number = 0;

    /**
    *  
    *  
    */
    Sex: number = 0;

    /**
    *  
    *  
    */
    Status: number = 0;

    /**
    *  
    *  
    */
    Channel: string = "";

    /**
    *  
    *  
    */
    Birthday: Date | string = new Date;

    /**
    *  
    * 微信 
    */
    WX: string = "";

    /**
    *  
    *  
    */
    QQ: string = "";

    /**
    *  
    * 电话 
    */
    Phone: string = "";

    /**
    *  
    * 用户等级 
    */
    Level: number = 0;

    /**
    *  
    * 用户积分 
    */
    Score: number = 0;

    /**
    *  
    * 用户资金余额 
    */
    Balance: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UserDelReq
*/
export class EntityUserDelReq extends Base {
    /**
    *  
    * 要删除的用户编号清单 
    */
    UIDs: number[] = [];

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UserSaveReq
*/
export class EntityUserSaveReq extends Base {
    /**
    *  
    *  
    */
    UID: number = 0;

    /**
    *  
    *  
    */
    PUID: number = 0;

    /**
    *  
    *  
    */
    CNum: number = 0;

    /**
    *  
    *  
    */
    TUID: number = 0;

    /**
    *  
    *  
    */
    Deep: number = 0;

    /**
    *  
    *  
    */
    Name: string = "";

    /**
    *  
    *  
    */
    Avatar: string = "";

    /**
    *  
    *  
    */
    Nick: string = "";

    /**
    *  
    *  
    */
    Head: string = "";

    /**
    *  
    *  
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    CUID: number = 0;

    /**
    *  
    *  
    */
    Sex: number = 0;

    /**
    *  
    *  
    */
    Status: number = 0;

    /**
    *  
    *  
    */
    Channel: string = "";

    /**
    *  
    *  
    */
    Birthday: Date | string = new Date;

    /**
    *  
    * 微信 
    */
    WX: string = "";

    /**
    *  
    *  
    */
    QQ: string = "";

    /**
    *  
    * 电话 
    */
    Phone: string = "";

    /**
    *  
    * 用户等级 
    */
    Level: number = 0;

    /**
    *  
    * 用户积分 
    */
    Score: number = 0;

    /**
    *  
    * 用户资金余额 
    */
    Balance: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.api.UserSearchReq
*/
export class EntityUserSearchReq extends Base {
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
* gitee.com.tansuyun.tgo.tuser.api.UserSearchRes
*/
export class EntityUserSearchRes extends Base {
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
    L: EntityUsers[] = [];

    /**
    *  
    * 响应数据的统计信息或额外信息 
    */
    R: number = 0;

}
/**
* gitee.com.tansuyun.tgo.tuser.entity.Users
*/
export class EntityUsers extends Base {
    /**
    *  
    *  
    */
    UID: number = 0;

    /**
    *  
    *  
    */
    PUID: number = 0;

    /**
    *  
    *  
    */
    CNum: number = 0;

    /**
    *  
    *  
    */
    TUID: number = 0;

    /**
    *  
    *  
    */
    Deep: number = 0;

    /**
    *  
    *  
    */
    Name: string = "";

    /**
    *  
    *  
    */
    Avatar: string = "";

    /**
    *  
    *  
    */
    Nick: string = "";

    /**
    *  
    *  
    */
    Head: string = "";

    /**
    *  
    *  
    */
    CTime: Date | string = new Date;

    /**
    *  
    *  
    */
    CUID: number = 0;

    /**
    *  
    *  
    */
    Sex: number = 0;

    /**
    *  
    *  
    */
    Status: number = 0;

    /**
    *  
    *  
    */
    Channel: string = "";

    /**
    *  
    *  
    */
    Birthday: Date | string = new Date;

    /**
    *  
    * 微信 
    */
    WX: string = "";

    /**
    *  
    *  
    */
    QQ: string = "";

    /**
    *  
    * 电话 
    */
    Phone: string = "";

    /**
    *  
    * 用户等级 
    */
    Level: number = 0;

    /**
    *  
    * 用户积分 
    */
    Score: number = 0;

    /**
    *  
    * 用户资金余额 
    */
    Balance: number = 0;

}
export class Auth extends Request {
    Class = "Auth";
    /**
    * 用户登录
    * 使用该接口完成登录请求
    * @param d {EntityLoginReq}
    * @return EntityAuthRes
    */
    async login(d: EntityLoginReq): Promise<EntityAuthRes> {
        d.PWD = md5(d.PWD)
        return this._post(this.Class + `/login`, d)
    }
    /**
    * 退出登录
    * 
    * @return EntityEmptyRes
    */
    async logout(): Promise<EntityEmptyRes> {
        return this._get(this.Class + `/logout`)
    }
    /**
    * 用户扫码登录确认
    * 用于在已登录的账户上调用该接口完成指定Token的登录确认
    * @param Token {string} 扫码登录中的Token认证串
    * @return EntityEmptyRes
    */
    async qrAcceptByToken(Token: string): Promise<EntityEmptyRes> {
        return this._get(this.Class + `/qrAccept/${Token}`)
    }
    /**
    * 发起扫码登录
    * 
    * @return EntityQrLoginRes
    */
    async qrLogin(): Promise<EntityQrLoginRes> {
        return this._get(this.Class + `/qrLogin`)
    }
    /**
    * 轮训检查扫码登录结果
    * 
    * @param Token {string} 扫码登录认证串
    * @return EntityAuthRes
    */
    async qrLoginCheckByToken(Token: string): Promise<EntityAuthRes> {
        return this._get(this.Class + `/qrLoginCheck/${Token}`)
    }
    /**
    * 注册账户
    * 
    * @param d {EntityRegistReq}
    * @return EntityUIDRes
    */
    async regist(d: EntityRegistReq): Promise<EntityUIDRes> {
        d.PWD = md5(d.PWD)
        return this._put(this.Class + `/regist`, d)
    }
    /**
    * 用户登录检查
    * 刷新页面后或需要读取用户最新数据时使用
    * @return EntityAuthRes
    */
    async relogin(): Promise<EntityAuthRes> {
        return this._get(this.Class + `/relogin`)
    }
}
export const AuthApi = new Auth()
export class Root extends Request {
    Class = "";
    /**
    * 读取单个组织机构数据
    * 
    * @param UnitID {number} 组织编号
    * @return EntityUnitGetRes
    */
    async Unit(UnitID: number): Promise<EntityUnitGetRes> {
        return this._get(this.Class + `/Unit/${UnitID}`)
    }
    /**
    * 读取单个用户信息数据
    * 
    * @param UID {number} 用户编号
    * @return EntityUserGetRes
    */
    async User(UID: number): Promise<EntityUserGetRes> {
        return this._get(this.Class + `/User/${UID}`)
    }
}
export const RootApi = new Root()
export class Unit extends Request {
    Class = "Unit";
    /**
    * 添加组织机构
    * 
    * @param d {EntityUnitAddsReq}
    * @return EntitySaveAddCommonRes
    */
    async adds(d: EntityUnitAddsReq): Promise<EntitySaveAddCommonRes> {
        return this._put(this.Class + `/adds`, d)
    }
    /**
    * 删除组织机构
    * 
    * @param d {EntityUnitDelReq}
    * @return EntitySaveAddCommonRes
    */
    async del(d: EntityUnitDelReq): Promise<EntitySaveAddCommonRes> {
        return this._post(this.Class + `/del`, d)
    }
    /**
    * 保存组织机构
    * 
    * @param d {EntityUnitSaveReq}
    * @return EntitySaveAddCommonRes
    */
    async save(d: EntityUnitSaveReq): Promise<EntitySaveAddCommonRes> {
        return this._post(this.Class + `/save`, d)
    }
    /**
    * 查询组织结构
    * 
    * @param d {EntityUnitSearchReq}
    * @return EntityUnitSearchRes
    */
    async search(d: EntityUnitSearchReq): Promise<EntityUnitSearchRes> {
        return this._post(this.Class + `/search`, d)
    }
    /**
    * 读取树形数据
    * 
    * @param UnitID {number} undefined
    * @param P {number} undefined
    * @param N {number} undefined
    * @return EntityUnitTreeRes
    */
    async treeByUnitID(UnitID: number, P: number = 1, N: number = 1000): Promise<EntityUnitTreeRes> {
        return this._get(this.Class + `/tree/${UnitID}?P=${P}&N=${N}`)
    }
}
export const UnitApi = new Unit()
export class User extends Request {
    Class = "User";
    /**
    * 删除用户信息
    * 
    * @param d {EntityUserDelReq}
    * @return EntitySaveAddCommonRes
    */
    async del(d: EntityUserDelReq): Promise<EntitySaveAddCommonRes> {
        return this._post(this.Class + `/del`, d)
    }
    /**
    * 保存用户信息
    * 
    * @param d {EntityUserSaveReq}
    * @return EntitySaveAddCommonRes
    */
    async save(d: EntityUserSaveReq): Promise<EntitySaveAddCommonRes> {
        return this._post(this.Class + `/save`, d)
    }
    /**
    * 查询用户结构
    * 
    * @param d {EntityUserSearchReq}
    * @return EntityUserSearchRes
    */
    async search(d: EntityUserSearchReq): Promise<EntityUserSearchRes> {
        return this._post(this.Class + `/search`, d)
    }
}
export const UserApi = new User()