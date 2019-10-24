<template>
  <div id="app">


  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%
}
#app{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
