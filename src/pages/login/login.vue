<template>
  <div class="login-container">
    <login-form :login_post_api="login_api" :return_url="return_url">
      <template slot="login_title">柳钢系统测试</template>
    </login-form>
  </div>
</template>

<script>
  import LoginForm from "components/NewComp/LoginForm/LoginForm.vue";

  export default {
    name: "LoginPage",
    data: function() {
      return {
        login_api: "/api/login_post",
        return_url:"/#/"
      };
    },
    methods: {},
    components: {
      "login-form": LoginForm
    }
  };
</script>

<style scoped>
.login-container {
  background-color: #2d3a4b;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  position: absolute;
}
</style>
