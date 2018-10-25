// 网站初始化全局设置

const dev_config = require(process.cwd() + "/config/index.js");
module.exports = {
  // 登陆权限相关配置
  Auth: {
    UserTokenName: "access-token",
    MainPageUrl: "/#/",
    LoginUrl: "/login.html#/"
  },
  // api，异步相关配置
  Axios: {
    // 默认api取开发config里面的proxytable的api
    Base_API: dev_config.dev.proxyTable["/api"].target
      ? dev_config.dev.proxyTable["/api"].target
      : "http://127.0.0.1"
  },
  Tab: {
    DefaultTab: { order: 0, id: "main_index", url: "/#/main", title: "main" }
  }
};
