<template>
  <div id="app">
    <input type="button" class="menuBar" value="aaa">
    <router-view/>
  </div>
</template>

<script>
</script>

<style lang=scss>
@import "./assets/style/base.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #235;
  margin-top: 60px;

  .menuBar {
    @include button-init();
    background-color: #235;
    &hober {
      background-color: #123;
    }
  }
}
</style>
