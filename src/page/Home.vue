<template>
    <PageLayout>
      <div class="container--fluid">
        <section class="section-slider">
            <SliderHome :items='[
              {
                link: {
                  href: "#",
                  label: "Explore Our Products"
                },
                title: "Coffee Mugs", 
                description: "The most versatile furniture system ever created. Designed to fit your life, made to move and grow.",
                image: require(`@/assets/img/slider/slide-1.jpg`),
                subTitle: "Best place to buy design",
                //video: require(`@/assets/video/v-720.mp4`)
              },
              { 
                title: "Coffee Mugs", 
                description: "The most versatile furniture system ever created. Designed to fit your life, made to move and grow.",
                image: require(`@/assets/img/slider/slide-2.jpg`),
                animate: true,
              },
              {
                title: "Coffee Mugs", 
                description: "The most versatile furniture system ever created. Designed to fit your life, made to move and grow.",
                image: require(`@/assets/img/slider/slide-3.jpg`),
                animate: true,
              },
            ]' 
          />
        </section>


      </div>
    </PageLayout>
</template>

<script  lang="ts">
import { defineComponent, } from 'vue'
import PageLayout from "@/components/layouts/page.layout.vue";
import SliderHome from "../components/SwiperFull.vue";

export default defineComponent( {
  name: 'HomePage',
  components:{
    PageLayout,
    SliderHome,
  }
})
</script>

<style lang="scss">
  .section-slider{
    padding-bottom: 120px;
  }
</style>

