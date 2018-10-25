import axios from "axios";
// import { Message, MessageBox } from "element-ui";
import store from "../store";
import { getToken } from "@/utils/auth";
import global_config from "@/global_config";
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers[global_config.Auth.UserTokenName] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
// 此处根据业务详细需求来配置
service.interceptors.response.use(error => {
  console.log("err", error); // debug用，axios返回错误
});

export default service;
