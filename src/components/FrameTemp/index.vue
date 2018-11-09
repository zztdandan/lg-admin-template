<template>
  <div>
    <!-- <h3>url:{{page_url}}</h3> -->

    <iframe :id="inner_page_id" :src="page_url" frameborder="0" :height="iframe_height"  class="frame-temp"></iframe>

    <!-- <div v-html="html_content"></div> -->
  </div>
</template>

<script>
  export default {
    name: "frame-temp",
    props: {
      url: {
        type: String,
        default: ""
      },
      page_id: {
        type: String,
        default: ""
      }
    },
    data: function() {
      let page_url_temp = "";
      if (this.url != "") {
        page_url_temp = this.url;
      } else {
        page_url_temp = this.$store.getters.ACTIVED_PAGE.url;
      }
      return {
        page: this.$store.getters.ACTIVED_PAGE,
        page_url: page_url_temp,
        iframe_height:"100%",
        inner_page_id:"iframe_"+this.page_id
        // html_content: ""
      };
    },
    computed: {},
    watch:{      
    },
    mounted: function() {
      let that_vue = this;

      // let xhr = new XMLHttpRequest();
      // xhr.onreadystatechange = function() {
      //   if (xhr.readystate == 4 && xhr.status == 200) {
      //     that_vue.html_content = xhr.responseText;
      //   }
      // };
      // xhr.open("GET", that_vue.url, true);
      // xhr.send();
    }
  };
</script>

<style scoped>
.frame-temp {
  width: 100%;
 min-height: calc(100vh - 105px);
  /* height:-webkit-fill-available; */
}
</style>