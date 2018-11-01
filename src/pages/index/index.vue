<template>
  <div>
    <lg-layout></lg-layout>
  </div>
</template>

<script>
  import LgLayout from "@/components/layout/layout.vue";
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
            let { data: res_menu } = await axios.get("/api/get_menu");
            // console.log(res_menu);
            let { data: res_auth } = await axios.get("/api/get_user_auth");
            // console.log(res_auth);
            let { data: res_role } = await axios.get("/api/get_user_role");
            // console.log(res_role);
            let { data: res_user_info } = await axios.get("/api/user_info");
            // console.log("user_info", res_user_info);
            if (
              res_menu.code != 0 ||
              res_auth.code != 0 ||
              res_role.code != 0 ||
              res_user_info.code != 0
            ) {
              // 返回出错了
              // console.log("1",  res_menu.code,"2", res_auth.code,"3", res_role.code ,"4", res_user_info.code)
              throw new Error("获取权限信息失败");
            } else {
              //登陆操作
              let login = that_vue.$store.dispatch(
                "User_Login",
                res_user_info.data
              );
              //设置权限、角色、用户侧边栏目录
              let res1 = await that_vue.$store.dispatch("SetAuth", res_auth.data);
              let res2 = await that_vue.$store.dispatch("SetMenu", res_menu.data);
              let res3 = await that_vue.$store.dispatch("SetRole", res_role.data);
            }
          } catch (e) {
            throw new Error(e);
          }
        }
        doasync();
      } catch (e) {
        // 如果读取登陆token失败，那么登陆失败，返回登录页面
        console.log("登陆初始化错误，跳转");
        location.href = that_vue.login_url;
      }
    },
    components: {
      "lg-layout": LgLayout
    }
  };
</script>
