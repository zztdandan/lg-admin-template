<template>

  <div style="height:2000px">
    MPA页面。 该页面高度为2000，尝试调用setheight函数
    <button @click="CloseHandle">关闭tab按钮测试</button>
  </div>
</template>

<script>
  export default {
    name: "main-app",
    data: function() {
      return {
        aaa: 1
      };
    },
    mounted: function() {
      console.log("开始设置高度");
      let hgt = window.document.body.scrollHeight+17;
      console.log("开始设置高度", hgt);
      let params = { iframe_name: "iframe_test", iframe_height: hgt };
      window.parent.postMessage(
        { type: "simple", req_name: "setIframeHeight", req_param: params },
        "*"
      );
    },
    methods: {
      CloseHandle() {
        let params = { name: "test" };
        window.parent.postMessage(
          { type: "simple", req_name: "closeIframe", req_param: params },
          "*"
        );
      }
    }
  };
</script>
