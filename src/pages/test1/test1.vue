<template>

  <div>
    test1页面
    <input v-model="aaa" type="text" />
  </div>
</template>

<script>
  export default {
    name: "main-app",
    data: function() {
      return {
        aaa: 4
      };
    }
  };
</script>
