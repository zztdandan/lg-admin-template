<template>
  <!-- 目前的sidebar先不做树形后续再实现 -->
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu :show-timeout="100" :default-active="actived_page" :collapse="isCollapse" mode="vertical" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
  import SidebarItem from "./SidebarItem";

  export default {
    components: { SidebarItem },
    data:()=>{
      return {
        page_menu:this.$store.getters.USER_MENU
      }
    },
    computed: {
      actived_page() {
        let page = this.$store.getters.ACTIVED_PAGE;

        return page.id;
      },
      root_menu() {
        
  return ;
      },
      isCollapse() {
        return this.$store.getters.SIDEBAR_COLLAPSE;
      }
    }
  };
</script>
