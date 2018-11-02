<template>
  <div>
    <h3>url:{{page_url}}</h3>
    <h3>router_path:{{router_path}}</h3>
    <h3>params:{{router_path}}</h3>
    <iframe :src="page_url" frameborder="0" class="frame-temp"></iframe>
  </div>
</template>

<script>
  export default {
    name: "frame-temp",
    data: function() {
      return {
        page: this.$store.getters.ACTIVED_PAGE
      };
    },
    computed: {
      page_url: function() {
        return this.$store.getters.ACTIVED_PAGE.url;
      },
      router_path: function() {
        return this.$route.path;
      },
      router_params: function() {
        return this.$route.params;
      }
    },
    mounted: function() {
      // 查看一下store的情况，如果没有对应store就进入了页面，说明这个页面是直接敲url进来的，
      // 这个情况下由于没有在index store预先读取信息，所以需要重新走一遍登陆等流程才行
    }
  };
</script>

<style scoped>
.frame-temp {
  width:100%;
  height:max-content;
}
</style>