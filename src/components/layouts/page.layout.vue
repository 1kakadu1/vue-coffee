<template>
    <div class="container">
        <Header  logo="IMAGE.png" :menu='menu' ></Header>
    </div>
    <main>
        <slot></slot>
    </main>
    <Footer logo="IMAGE.png" />
</template>
<script setup lang="ts">
import { VueElement } from 'vue'
  import {routerMenu, RouterPath} from "@/router/router";
  const menu = {...routerMenu} as {label: string, href: RouterPath, icon?: VueElement}[];
</script>
<script  lang="ts">
import { defineComponent, } from 'vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent( {
  name: 'PageLayout',
  components:{
    Header,
    Footer,
  }
})
</script>