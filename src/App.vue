<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import './styles/reset.scss';
  @import './styles/grid-bootstrap-5/index.scss';
  @import "./styles/vars.scss";
  @import './styles/global.scss';
  @font-face {
    font-family: "Karla";
    src: local("Karla"),
    url(./assets/fonts/Karla-Regular.ttf) format("truetype");
  }
  body{
    font-family: "Karla";
    color: $black;
  }
</style>
