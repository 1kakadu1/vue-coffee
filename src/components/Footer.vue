<template>
    <footer class="footer">
      <div class="container">
        <div class="row">
            <div class="col-md-4 footer__col-full">
                <div class="footer__wrap-info">
                  <div class="footer__logo">
                    <img :src="require(`@/assets/img/${logo}`)" alt="logo">
                  </div>
                  <div class="footer__desc g-typography-desc">
                    Delivering the best coffee life since 1996. From coffee geeks to the real ones.
                  </div>
                </div>

                <div class="footer__copyright">
                  CoffeeStyle Inc. © 1996
                </div>
            </div>
            <div class="col-md-2">
              <div class="footer__name">
                    Menu
              </div>
              <ul>
                <li class="menu-list__item" v-for="item in menu" :key="item.href">
                  <a :href="item.href" class="link">
                    {{ item.label }}
                  </a>
              </li>
              </ul>
            </div>
            <div class="col-md-2">3</div>
            <div class="col-md-4">
              <div class="footer__wrap-info">
                  <div class="footer__name">
                    Contact Us
                  </div>
                  <div class="footer__desc g-typography-desc">
                    We’re Always Happy to Help
                  </div>
                  <a href="mailto:example@mail.ru" class="footer__email g-typography-title">
                    us@coffeestyle.io
                  </a>
                </div>

              </div>
        </div>
      </div>
    </footer>
</template>


<script setup  lang="ts">
  import { VueElement } from 'vue'
  import {routerMenu, RouterPath} from "@/router/router";
    const menu = {...routerMenu} as {label: string, href: RouterPath, icon?: VueElement}[];

    defineProps<{ logo: string }>()
</script>
<script  lang="ts">
import { defineComponent, defineProps, } from 'vue'

export default defineComponent( {
  name: 'FooterComponent',
})
</script>

<style lang="scss">
  .footer{
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    &__logo{
      padding-bottom: 22px;
      &>img{
        max-width: 112px;
      }
    }
    &__desc{
      font-size: 14px;
    }
    &__copyright{
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: rgba(29, 31, 46, 0.3);
    } 
    &__col-full{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &__email{
      display: block;
      text-decoration: none;
      padding: 16px 0px;
    }
    &__name{
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #1D1F2E;
      padding-bottom: 22px;
    }
  }
</style>
