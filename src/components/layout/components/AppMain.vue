
<template>
  <!-- 这是存储iframe页面的控件 -->
  <section class="app-main">
    <!-- <transition-group name="fade-transform" mode="out-in"> -->
      <!-- or name="fade" -->
      <!-- <router-view :key="key"></router-view> -->
      <div v-for="one_page in tab_list" v-bind:key="one_page.id">
        <keep-alive include="frame-temp,vhtml-panel">
          <frame-temp :url="one_page.url"  :page_id="one_page.id" :class="is_active_class(one_page.id)"></frame-temp>
          <!-- <vhtml-panel :url.sync="one_page.url" :class="is_active_class(one_page.id)"></vhtml-panel> -->
        </keep-alive>
      </div>

    <!-- </transition-group> -->
  </section>
</template>

<script>
  import FrameTemp from "components/FrameTemp";
  import VhtmlPanel from "components/VHtmlPanel";
  export default {
    name: "AppMain",
    computed: {
      active_tab() {
        return this.$store.getters.ACTIVED_PAGE;
      },
      tab_list(){
            return this.$store.getters.TABS;
      }
    },
    data: function() {
      return {
        // active_tab: this.$store.getters.ACTIVED_PAGE
      };
    },
    watch: {
      active_tab(newval, oldval) {
        //———————————————————————————————————————————————————————————————
        // //这里是使用vue-router实现的tab管理
        // console.log("watch active", newval);
        // let a_id = newval.id;
        // if (typeof a_id !== "string") {
        //   this.$router.push({ path: "/" });
        // } else {
        //   this.$router.push({ name: "home_menu", params: { page_id: a_id } });
        // }
        //——————————————————————————————————————————————————————————————
        // 这里是使用visible实现的tab管理
        console.log("watch active", newval);
        let a_id = newval.id;
        if (typeof a_id !== "string") {
          this.$router.push({ path: "/" });
        } else {
          this.$router.push({ name: "home_menu", params: { page_id: a_id } });
        }
        //上面是使用伪切换
      }
    },
    components: {
      FrameTemp,
      VhtmlPanel
    },
    methods: {
      is_active_class(one_page_id) {
        let active_id = this.active_tab.id;
        if (one_page_id === active_id) {
          return "active_page";
        } else {
          return "inactive_page";
        }
      },
      frame_ref(page_id){
        return "frame_"+page_id;
      }
    }
  };
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: 100%;
  position: relative;
  overflow: hidden;
}
.active_page {
  display: block;
height: fit-content;
}
.inactive_page {
  display: none;
}
</style>
