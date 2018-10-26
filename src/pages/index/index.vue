<template>
  <div>
    <lg-layout></lg-layout>
  </div>
</template>

<script>
  import layout from "@/views/layout1/layout.vue";
  import { getToken, setToken, removeToken } from "@/utils/auth";
  import { Router, http, cli } from "director";
  import global_config from "@/global_config";

  export default {
    name: "main-app",
    data: () => {
      return {
        login_url: "/login.html"
      };
    },
    // 在此处做登陆处理
    created: function() {
      let that_vue = this;
      try {
        async function doasync() {
          try {
            //一系列登录后权限、用户信息获取。都是用token去找后台
            let token = getToken();
            let axios = that_vue.$ajax;
            let res_menu = await axios.get("/api/get_menu").data;
            let res_auth = await axios.get("/api/get_user_auth").data;
            let res_role = await axios.get("/api/get_user_role").data;
            let res_user_info = await axios.get("/api/user_info").data;
            if (
              res_menu.code != 0 ||
              res_auth.code != 0 ||
              res_role.code != 0 ||
              res_user_info.code != 0
            ) {
              // 返回出错了
              throw new Error("获取权限信息失败");
            } else {
              //登陆操作
              let login = that_vue.$store.dispatch(
                "User_Login",
                res_user_info.data
              );
              //设置权限、角色、用户侧边栏目录
              let res = await that_vue.$store.dispatch(
                "SetAuthMenuRole",
                res_auth.data,
                res_menu.data,
                res_role.data
              );
            }
          } catch (e) {
            throw new Error(e);
          }
        }
        doasync();
      } catch (e) {
        // 如果读取登陆token失败，那么登陆失败，返回登录页面
        location.href = that_vue.login_url;
      }
    },
    components: {
      layout
    }
  };
</script>
