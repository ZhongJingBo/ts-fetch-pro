import fetchRequest from "./request";
import { FetchRequestConfig } from "../type";

 function dispatchRequest(config: FetchRequestConfig) {
    return fetchRequest(config).then(res=> {
        return res
    })
   
}

export default dispatchRequest;
