<template>
    <header class="header">
        <div class="header__logo">
            <img :src="require(`@/assets/img/${logo}`)" alt="logo">
        </div>
        <div class="header__toolbar">
          <div class="header__menu">
              <MenuHeader
                :link="menu"
              />
          </div>
          <div class="header__actions">
            <cart-button
              :open='true'
              :onToggle='(value: boolean)=> void 0'
              :count="0"
            />
          </div>
        </div>

    </header>
</template>

<script setup  lang="ts">
    defineProps<{ logo: string, menu: {label: string, href: RouterPath, icon?: VueElement}[] }>()
</script>

<script  lang="ts">
import { defineComponent, defineProps, VueElement, } from 'vue'
import MenuHeader from "@/components/Menu.vue";
import CartButton from "@/components/buttons/CartButton.vue";
import {RouterPath} from "../router/router";

export default defineComponent( {
  name: 'HeaderComponent',
  components:{
    MenuHeader,
    CartButton,
  },
})
</script>

<style lang="scss">
  @import "@/styles/vars.scss";
  .header{
      display: flex;
      align-items: center;
      padding-bottom: 22px;
      padding-top: 22px;
      width: 100%;
      &__menu{
        order: 2;
        margin-left: 24px;
        @media (min-width: 996px){
          order: 0;
          margin-left: 0px;
        }
        
      }
      &__toolbar{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        @media (min-width: 996px){
          justify-content: space-between;
        }
      }
  }
  
</style>
