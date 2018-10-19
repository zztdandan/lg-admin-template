<template>
  <!-- 总体布局使用element自带的布局 -->
  <el-container>
    <el-aside>
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>
        <navbar></navbar>
        <tab-tool></tab-tool>
      </el-header>
      <el-main>

        <app-main></app-main>
      </el-main>
      <el-footer><lg-footer></lg-footer></el-footer>
    </el-container>
  </el-container>
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
  import { Navbar, Sidebar, AppMain, LgFooter,TabTool } from "./components";
  import ResizeMixin from "./mixin/ResizeHandler";

  export default {
    name: "Layout",
    components: {
      Navbar,
      Sidebar,
      AppMain,
      LgFooter,
      TabTool
    },
    mixins: [ResizeMixin],
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
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>
