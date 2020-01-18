import axios from 'axios'
import { Message, MessageBox, Loading } from 'element-ui'
import store from '../store'
import { getUserType, getToken } from '@/utils/auth'
import { loginOut } from "@/utils/auth"

// 创建axios实例
const service = axios.create({
    withCredentials: true,
    baseURL: process.env.BASE_API, // api 的 base_url
    // baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000 // 请求超时时间
})
var loading;
var timer;

// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            // 每次请求带上用户信息 可结合自己业务进行修改
            config.headers['token'] = getToken()
            config.headers['usertype'] = getUserType()
        }
        loading = Loading.service({
            background: "rgba(0,0,0,0.5)"
        });
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        setTimeout(() => {
            loading.close();
        }, 500)

        /**
         * code为非200是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code != 200) {

            // 非法的token 当用户的token信息不正确时所返回的状态  可结合自己业务进行修改
            if (res.code == 403 || res.code == 416) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    MessageBox.confirm(
                        '你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                        confirmButtonText: '重新登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        loginOut(() => {
                            location.reload()
                        });
                    })
                }, 1000)
                return Promise.reject('error');
            }
            Message({
                message: res.datas.error,
                type: 'error',
                duration: 3000
            })
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        setTimeout(() => {
            loading.close();
        }, 500)
        Message({
            message: "服务器繁忙，请稍后重试",
            type: 'error',
            duration: 3000
        })
        return Promise.reject(error)
    }
)

export default service
