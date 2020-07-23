import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_URL, // 这个引入环境变量！！！
  timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {   //这在里判断是post还是get请求 根据你们公司后端结构统一修改传参方式
  config.method === 'post'
    ? config.data = { ...config.data }    //如果是post 就将参数放入搭配请求的body里吗
    : config.params = { ...config.params }  //是get就将他传入到请求的header里面
  config.headers['Content-Type'] = 'application/json'   //还有一些公共的配置都是在config里进行配置的   我这个是根据我们后端进行配置的传参的类型
  //还可以在这个里面进行添加token  有时候接口有进行鉴权，通过添加config.headers[authorization]这个每次请求的时候带token

  return config
}, error => { // 请求错误处理
  Promise.reject(error)
})

/** **** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  response => { // 成功请求到数据
    // 这里根据后端提供的数据进行对应的处理
    if (response.data.rlt == true) {   //后端返回200，还需要进行判断里面是否有数或者异常 
      return response.data.data
    }
    if (!response.data.rlt) {//后端返回200，但是内容为异常的时候
      return Promise.reject(response.data)   //使用promise.reject将错误信息进行抛出
    }
  },
  error => { // 响应错误处理
    return Promise.reject(error)
  }
)
export function getAction (url, params) {  //封装get请求 传params
  return service({
    url: url,
    method: 'get',
    params: params
  })
}

export function postAction (url, data) {  //封装pst请求 传data
  return service({
    url: url,
    method: 'post',
    data: data
  })
}
