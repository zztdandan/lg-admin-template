<template>
  <!-- 总体布局使用element自带的布局 -->
  <div :class="classObj" class="app-wrapper">
    <el-container>
      <el-aside>
        <!-- 侧边栏 -->
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <!-- navbar，将toggle取消，放在别的位置 -->
        <el-header>
          <navbar></navbar>
          <!-- tab管理层，用vuex进行管理 -->
          <tab-tool></tab-tool>
        </el-header>

        <el-main>
          <!-- 主要页面iframe内容 -->
          <app-main></app-main>
        </el-main>
        <el-footer>
          <!-- 页脚 -->
          <lg-footer></lg-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
  <!-- <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
    </div>
  </div> -->
</template>

<script>
  import { Navbar, Sidebar, AppMain, LgFooter, TabTool } from "./components";

  export default {
    name: "Layout",
    components: {
      Navbar,
      Sidebar,
      AppMain,
      LgFooter,
      TabTool
    },

    computed: {
      sidebar() {
        return this.$store.state.app.sidebar;
      },
      device() {
        return this.$store.state.app.device;
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === "mobile"
        };
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch("CloseSideBar", { withoutAnimation: false });
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
</style>
