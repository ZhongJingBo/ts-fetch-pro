import dispatchRequest from "./dispatchRequest";
import { FetchRequestConfig, Method } from "../type";

class FecthExtend {
  request(config: FetchRequestConfig) {
    return dispatchRequest(config);
  }

  get(url: string, config?: FetchRequestConfig) {
    return this._requestMethodWithoutData(url, 'get', config);
  }

  _requestMethodWithoutData(
    url: string,
    method: Method,
    config?: FetchRequestConfig
  ) {
    return this.request(Object.assign(config||{}, { url, method }));
  }
}


export default FecthExtend