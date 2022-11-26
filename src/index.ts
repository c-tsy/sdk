import axios from 'axios'
import { crc8, store } from '@ctsy/common'
import local from 'localforage'
import hook, { HookWhen } from '@ctsy/hook'
export const SDKHooks = {
    BeforeRequest: 'BeforeRequest',
    AfterRequest: "AfterRequest"
}
var stores = local.createInstance({
    name: "ctsysdk"
});
var token = ""
const req = axios.create({ withCredentials: true })

req.interceptors.request.use(async (c: any) => {
    let key = c.method + c.url + crc8(JSON.stringify(c.data || {}))
    c.key = key
    //读取并写入请求md5
    var cached = (await stores.getItem(key)) || { d: "", md5: "" }
    if (cached) {
        //@ts-ignore
        if (cached.md5)
            //@ts-ignore
            c.headers['md5'] = cached.md5
        //@ts-ignore
        c.cdata = cached.d || ""
    }
    c.headers.token = token
    await hook.emit(SDKHooks.BeforeRequest, HookWhen.Before, c, c)
    return c;
})


req.interceptors.response.use(async (r: any) => {
    if (r.headers.token) {
        token = r.headers.token
        store.set("token", token)
    }
    await hook.emit(SDKHooks.BeforeRequest, HookWhen.Before, r, r.data)
    // debugger
    if (r.headers.md5) {
        //存储缓存信息，
        if (r.status == 204) {
            return r.config.cdata
        } else {
            stores.setItem(r.config.key, { md5: r.headers.md5, d: r.data.d })
        }
    }

    if (r.data.c == 0) {
        return r.data.d
    } else {
        throw new Error(r.data.m)
    }

})

export class Base {
    $set(d: { [key: string]: any }) {
        for (let k in d) {
            //@ts-ignore
            this[k] = d[k]
        }
        return this;
    }
}

export class SearchWhere {
    P = 1;
    N = 10
    Sort = ""
    Fields = ""
    W = {}
}

export class SearchResult<T>{
    P = 1;
    N = 10
    T = 0
    L: T[] = []
    R = {}
}

var Host = ""
export function set_host(host: string) {
    Host = host
}
export function set_token(token: string) {
    token = token
}
export class Request {
    Host = ""

    protected _post(path: string, data: any) {
        return this._req(path, "post", data)
    }

    protected _get(path: string) {
        return this._req(path, "get")
    }

    protected _put(path: string, data: any) {
        return this._req(path, "put", data)
    }

    protected _patch(path: string, data: any) {
        return this._req(path, "patch", data)
    }

    protected _delete(path: string) {
        return this._req(path, "delete")
    }

    protected _req(path: string, method: string, data?: any): Promise<any> {
        //查询缓存并上报缓存结论，服务端判断是否需要返回内容
        return req.request({
            url: [this.Host.length > 0 ? this.Host : Host, path].join('/'), method, data
        })
    }
}

set_token(store.get("token", ""))

export class BaseCURD<T> extends Request {

    Name = ""
    /**
     * 
     * @param DID 
     * @returns 
     */
    get(ID: number): Promise<T> {
        return this._get(this.Name + "/" + ID)
    }

    async save(d: T) {
        (await this._patch(this.Name + "/save", d)).N > 0
    }

    async saves(IDs: number[], d: { [index: string]: string | number | object | boolean }) {
        (await this._patch(this.Name + "/saves", { L: IDs, Data: d })).N > 0
    }

    async adds(d: T[]) {
        return (await this._put(this.Name + "/adds", { L: d })).N > 0
    }

    async del(DIDs: number[]) {
        return (await this._post(this.Name + "/del", { L: DIDs })).N > 0
    }

    search(w: SearchWhere): Promise<SearchResult<T>> {
        return this._post(this.Name + "/search", w)
    }

}
