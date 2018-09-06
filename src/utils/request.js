var Fly = require('flyio/dist/npm/wx')

const fly = new Fly()
// 定义公共headers
// fly.config.headers = {'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'}
// 设置超时

fly.config.timeout = 10000
// 设置请求基地址
fly.config.baseURL = 'https://yj.kiy.cn' // process.env.BASE_API
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
//   request.headers['X-Tag'] = 'flyio'
  // 打印出请求体
  // console.log(request.body)
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

fly.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    debugger
    // 发生网络错误后会走到这里
    wx.showToast({
      title: err.msg,
      icon: 'none'
    })
    return Promise.reject(err)
  }
)

export default fly
