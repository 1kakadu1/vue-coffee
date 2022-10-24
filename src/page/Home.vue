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
        ]' />
      </section>
      <section-text link="12" title="Even the all-powerful Pointing has no control about the blind texts."
        description="It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.">
      </section-text>

      <section-products :products="PRODUCTS_MOCK_DATA" title="Featured Mugs" cardSize="full"
        :column="['col-12', 'col-md-6', 'col-xl-4']"></section-products>

      <section-products :products="PRODUCTS_MOCK_DATA" title="More Products" cardSize="small"
        :column="['col-12', 'col-md-6', 'col-lg-4']"></section-products>

      <section-magazine></section-magazine>

    </div>
  </PageLayout>
</template>
<script setup  lang="ts">
import { PRODUCTS_MOCK } from "@/const/mocks/prodduct.mock";
const PRODUCTS_MOCK_DATA = [...PRODUCTS_MOCK];
</script>
<script  lang="ts">
import { defineComponent, } from 'vue'
import PageLayout from "@/components/layouts/page.layout.vue";
import SliderHome from "../components/SwiperFull.vue";
import SectionText from "@/components/sections/SectionText.vue";
import SectionProducts from "@/components/sections/SectionProducts.vue";
import SectionMagazine from "@/components/sections/SectionMagazine.vue";

export default defineComponent({
  name: 'HomePage',
  components: {
    PageLayout,
    SliderHome,
    SectionText,
    SectionProducts,
    SectionMagazine,
  }
})
</script>

<style lang="scss">
.section-slider {
  padding-bottom: 120px;
}
</style>

