<template>
  <!-- 这是存储iframe页面的控件 -->
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <router-view/>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "AppMain",
    computed: {
      // key() {
      //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    },
    data:function() {
      return {
        active_tab: this.$store.getters.ACTIVED_PAGE
      };
    },
    watch: {
      active_tab(newval, oldval) {
        let a_id = newval.id;
        this.$router.push({ name: "home_menu", params: { page_id: a_id } });
      }
    }
  };
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>
