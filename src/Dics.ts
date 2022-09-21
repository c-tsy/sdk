import { BaseCURD, Request, SearchResult, SearchWhere } from ".";


export class DicsEntity {
    DID: number = 0
    TDID: number = 0
    PDID: number = 0
    Level: number = 0
    TID: number = 0
    Name: string = ""
    Code: string = ""
    Status: number = 0
    AID: number = 0
    GID: number = 0
    Key: string = ""
    CUID: number = 0
    CTime: string = "";
    Memo: string = ""
    Icon: string = ""
    Rule: string = ""
    OType: string = ""
    OID: number = 0
    UTime = "";
    UUID: number = 0
    DUID: number = 0
    DTime = "";
}


export class Dics extends BaseCURD<DicsEntity> {

    Name = "Dics"

}

const DicsApi = new Dics

export default DicsApi