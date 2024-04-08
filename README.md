# ts-fetch-pro

基于 FetchApi 的请求

封装

1. 请求类型，请求参数，header 信息

2.loading 接口错误处理 自定义接口超时时间

3.放弃迟到的响应，多次接口请求只取最后一次

4.拦截器功能，以及取消请求

基于 ts-fetch-pro 请求 开发 react hooks 请求包

一个 fecth 请求封装的参考链接
// https://www.cnblogs.com/warm-stranger/p/13229540.html

import request from 'ts-fetch-pro'

默认 get 请求

const cancelToken = request.get('www.baidu.com').then(res=>{

})

request('www.baidu.com').then(res=>{

})

const { cancelToken } = request.post('www.baidu.com',{
data: "",
header:{

    }

}).then(res=>{

})

rquest.post('www.baidu.com').config({

    data: "",
    header:{

        }

})



const post = ()=>{
    return rquest.post('www.baidu.com')
}


post().config({})