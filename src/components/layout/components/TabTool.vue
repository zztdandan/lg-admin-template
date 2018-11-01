<template>
  <!-- tab管理模块 -->
  <div>
    <div v-for="one_tab in tab_list" :key="one_tab.id">
      <el-tag closable :class="tab_class_obj[one_tab.id]" :disable-transitions="false" @click="handleClick(one_tab)" @close="handleClose(one_tab)">{{one_tab.title}}</el-tag>
    </div>
    <hr/>
  </div>

</template>

<script>
  //  { order: 0, id: "main_index", url: "/#/home_menu/main", title: "main" }
  export default {
    name: "tab-tool",
    data: function() {
      return {};
    },
    computed: {
      tab_list() {
        return this.$store.getters.TABS;
      },
      actived_tab() {
        return this.$store.getters.ACTIVED_PAGE;
      },
      tab_class_obj() {
        let active_class_id = this.$store.getters.ACTIVED_PAGE.id;
        let c = {};
        for (ele in this.tab_list) {
          if (ele.id == active_class_id) {
            c[ele.id] = "active-tab";
          } else {
            c[ele.id] = "normal-tab";
          }
        }
        return c;
      }
    },
    methods: {
      handleClose(one_tab) {
        this.$store.dispatch("close_page", one_tab.id);
      },
      handleClick(one_tab) {
        this.$store.dispatch("toggle_page", one_tab.id);
      }
      // tab_class(tab_id) {
      //   let active_class_id = this.$store.getters("ACTIVED_PAGE").id;
      //   if (tab_id === active_class_id) {
      //     return "active-tab";
      //   } else {
      //     return "normal-tab";
      //   }
      // }
    }
  };
</script>

<style scoped>
.active-tab {
  background-color: blue;
}
.normal-tab {
  background-color: azure;
}
</style>