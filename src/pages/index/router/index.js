import Vue from "vue";
import Router from "vue-router";
import FrameTemp from '@/components/FrameTemp';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home_menu/:page_id",
      name: "home_menu",
      component: FrameTemp,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
  ]
});
