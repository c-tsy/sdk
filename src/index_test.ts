import { SearchWhere, set_host } from ".";
import DicTypeApi, { DicsType } from "./DicsType";

set_host("http://localhost:8000/")



async function test() {

    try {
        let rs: any = await DicTypeApi.search(new SearchWhere)
        console.log("TypeReuslt", rs)
        let type = new DicsType()
        type.Name = "Debug"
        // rs = await DicTypeApi.adds([type])
        rs = await DicTypeApi.search(new SearchWhere)
        console.log("TypeReuslt", rs)
    } catch (error) {

    }

}


test()