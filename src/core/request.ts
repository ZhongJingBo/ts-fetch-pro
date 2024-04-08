// 原生fetch 请求
import { FetchRequestConfig, FetchInternalConfig } from "../type";

const fetchRequest = (config: FetchRequestConfig) => {
  const { url, method = "get", mode } = config;

  const fetchConfig: FetchInternalConfig = { method };

  if (mode) {
    fetchConfig.mode = mode;
  }

  return new Promise(async (reslove, reject) => {

    const response = await fetch(url, fetchConfig).then((res) => res.json());

    console.log("fetchConfig----response", response);

    reslove(response);
  });
};


export default fetchRequest

// post get 如何区分

// 如何改变请求头

// 跨域 cors 如何做

// 错误信息如何抛出

//如何终止fetch 请求

// 添加拦截器
