import axios from 'axios'

const req = axios.create({ withCredentials: true })

req.interceptors.request.use((c) => c)

req.interceptors.response.use((r) => {

    if (r.data.c == 0) {
        return r.data.d
    } else {
        throw new Error(r.data.m)
    }

})


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

    protected _req(path: string, method: string, data?: any): Promise<any> {
        //查询缓存并上报缓存结论，服务端判断是否需要返回内容
        return req.request({
            url: [this.Host.length > 0 ? this.Host : Host, path].join('/'), method, data
        })
    }
}


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
