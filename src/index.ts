import axios, { AxiosRequestConfig } from 'axios'
import { crc8, store } from '@ctsy/common'
import local from 'localforage'
import hook, { HookWhen } from '@ctsy/hook'
import { encode, decode } from "@msgpack/msgpack";
import { cloneDeep } from 'lodash'
// import "./buffer"

export const SDKHooks = {
    BeforeRequest: 'BeforeRequest',
    AfterRequest: "AfterRequest"
}
var stores = local.createInstance({
    name: "ctsysdk"
});
var token = ""
var Debug = true
const req = axios.create({ withCredentials: true })


//@ts-ignore
req.interceptors.request.use(async (c: AxiosRequestConfig & { key: string }) => {
    let key = [c.method, c.url, crc8(JSON.stringify(c.data || {}))].join('')
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
    //todo 增加请求体的md5值
    //@ts-ignore
    c.headers.token = token
    c.responseType = 'arraybuffer'
    await hook.emit(SDKHooks.BeforeRequest, HookWhen.Before, c, c)
    if (!Debug && c.data && 'object' == typeof c.data) {
        //检测是否支持pb，如果支持pb则使用pb编码，否则使用msgpack
        c.data = encode(c.data)
        //@ts-ignore
        c.headers['Content-Type'] = 'application/msg'
    }
    return c;
})


req.interceptors.response.use(async (r) => {
    if (r.headers.token) {
        token = r.headers.token
        store.set("token", token)
    }
    let content = r.headers['content-type']
    if (r.status != 204 && r.data.byteLength > 0) {
        if (content) {
            if (content.includes('msg')) {
                r.data = decode(r.data);
            } else if (content.includes('proto') || content.includes('pb')) {
                //TODO  r.data
            } else if (content.includes('json')) {
                //@ts-ignore
                r.data = JSON.parse(Buffer.from(r.data).toString())
            } else {
                console.error("无法识别的响应内容")
            }
        }
    }

    await hook.emit(SDKHooks.BeforeRequest, HookWhen.Before, r, r.data)
    // debugger
    if (r.headers.md5) {
        //存储缓存信息，
        if (r.status == 204) {
            //@ts-ignore
            return r.config.cdata
        } else {
            try {
                //@ts-ignore
                stores.setItem(r.config.key, { md5: r.headers.md5, d: cloneDeep(r.data.d) })
            } catch (error) {

            }
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
export function set_token(ctoken: string) {
    token = ctoken
}

export function set_debug(debug: boolean = true) {
    Debug = debug
}
export class Request {
    Host = ""

    _post(path: string, data: any) {
        return this._req(path, "post", data)
    }

    _get(path: string) {
        return this._req(path, "get")
    }

    _put(path: string, data: any) {
        return this._req(path, "put", data)
    }

    _patch(path: string, data: any) {
        return this._req(path, "patch", data)
    }

    _delete(path: string) {
        return this._req(path, "delete")
    }

    _req(path: string, method: string, data?: any): Promise<any> {
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
