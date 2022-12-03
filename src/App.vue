<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./modules/header/Header-component.vue";
import FooterComponent from "./modules/footer/Footer-component.vue";

export default {
  components: { HeaderComponent, FooterComponent },
};
</script>

<style lang="scss">
@import "./assets/css/global.scss";
</style>
