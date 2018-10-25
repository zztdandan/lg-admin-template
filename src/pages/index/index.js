import Vue from "vue";

import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

// 主页面vue
import App from "./index.vue";

// index的专用store，就是主要的store
// import MainStore from "./store";

import "@/icons"; // icon
// import "@/permission"; // permission control

// 引入修改过的实例作为axios使用
import axios from "@/utils/axios_rebase";

Vue.use(MainStore);
Vue.use(ElementUI, { locale });
Vue.prototype.$ajax = axios;
Vue.config.productionTip = false;

var Main_App = new Vue({
  el: "#app",
  MainStore,
  render: h => h(App)
});
