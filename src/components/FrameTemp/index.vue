<template>
  <div>
    <h3>url:{{page_url}}</h3>
    <h3>router_path:{{router_path}}</h3>
    <h3>params:{{router_path}}</h3>
    <iframe :src="page_url" frameborder="0"></iframe>
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
    }
  };
</script>

<style scoped>
</style>