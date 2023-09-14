/* eslint-disable @typescript-eslint/no-unused-vars */
import axios /* AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse */ from "axios"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
})

// export default NProgress;

const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  // 自定义请求头
  headers: { "X-Requested-With": "XMLHttpRequest" },
})

instance.interceptors.request.use(
  function (config) {
    NProgress.start()
    // * 如果当前请求不需要显示 loading,在api服务中通过指定的第三个参数: { headers: { noLoading: true } }来控制不显示loading，参见loginApi
    // config.headers!.noLoading || showFullScreenLoading();
    // const token: string = store.getState().global.token;
    // return { ...config, headers: { ...config.headers, "x-access-token": token } };
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    const { data } = response
    NProgress.done()

    // * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
    return data
  },
  function (error) {
    // const { response } = error
    NProgress.done()
    // tryHideFullScreenLoading()
    // // 请求超时单独判断，请求超时没有 response
    // if (error.message.indexOf("timeout") !== -1) message.error("请求超时，请稍后再试")
    // // 根据响应的错误状态码，做不同的处理
    // if (response) checkStatus(response.status)
    // // 服务器结果都没有返回(可能服务器错误可能客户端断网) 断网处理:可以跳转到断网页面
    // if (!window.navigator.onLine) window.location.hash = "/500"
    return Promise.reject(error)
  }
)

// * 常用请求方法封装

function  get<T>(url: string, params?: object, _object = {}): Promise<T> {
		return instance.get(url, { params, ..._object });
	}
function  post<T>(url: string, params?: object, _object = {}): Promise<T> {
		return instance.post(url, params, _object);
	}

 
export {instance,get
,post}
