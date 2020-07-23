
import { getAction, postAction } from './request'   //将封装好的axios拦截器实例引用

const getTest = (params) => getAction('/test', params) // get请求测试
const postTest = (data) => postAction('/test', data)   //post请求测试


export {  //抛出请求方法
    getTest,
    postTest
}
