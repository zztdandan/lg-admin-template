<template>
    <!-- 这是显示user信息的右上角模块 -->
    <div class="user-tab-over">
        <span class="user-tab-avatar">
           <img :src="avatar_url"/>
        </span>
        <span class="lgui-down-arrow user-tab-da"></span>
    </div>
</template>

<script>
    export default {
      name: "user-tab",
      data: function() {
        return {};
      },
      computed: {
        avatar_url() {
          return this.$store.getters.USER_INFO.user_avatar;
        },
        user_name() {
          return this.$store.getters.USER_INFO.user_name;
        }
      }
    };
</script>

<style scoped>
.user-tab-over {
  margin-bottom: 0px;
  float: left;
  position: relative;
  height: 100%;
}
.user-tab-avatar {
  display: inline;
  line-height: 1.5rem;
  font-size: 2rem;
}
.user-tab-da {
  display: inline;
  line-height: 1.5rem;
  font-size: 1rem;
}
</style>