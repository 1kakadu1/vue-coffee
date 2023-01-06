<script setup  lang="ts">
    interface IItems{
        link?: {
            href: string,
            label: string,
        },
        subTitle?: string,
        title: string,
        description: string;
        image: string,
        video?: string,
        animate?: boolean,
    }
    let video = ref(null);

    const onTransitionEnd = (swiper: any)=>{
        const videoREf: HTMLVideoElement | null = (video.value  as any)['0'] as HTMLVideoElement | null;
        if( swiper.activeIndex !== 0 && videoREf !== null){
            videoREf.pause();
        }

        if(swiper.activeIndex === 0 && videoREf !== null){
            videoREf.play();
        }
    }

    const modules = [Navigation];
    defineProps<{ items: IItems[] }>();
</script>

<script  lang="ts">
import { defineComponent, defineProps, ref } from 'vue';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import Button from "@/components/buttons/Button.vue";

import 'swiper/css';
import "swiper/css/navigation";


  export default defineComponent({
    name: "SwiperFull",
    components: {
      Swiper,
      SwiperSlide,
      Button
    },
    computed: {
        swiper() {
            return this.$refs.controlledSwiper;
        },
    },
    mounted: function(){
        const video = this.$refs.video as HTMLVideoElement[];
        video[0].play();
    },
  });

</script>
<template>
    <div class="swiper-full">
        <swiper
            ref="mySwiper"
            :slides-per-view="1"
            :modules="modules"
            :navigation="true" 
            @transition-end="onTransitionEnd"
            
        >
            <swiper-slide v-for="item in items" :key="item.title">
                <div :class="{animate: item.animate}" class="slide-item">
                    <img :src="item.image" alt="" class="slide-item__preview">
                    <video autoplay loop muted class="slide-item__video" ref="video" :poster="item.image" v-if="item.video">
                        <source :src="item.video" type="video/mp4">
                    </video>
                    <div class="slide-item__overlay"></div>
                    <div class="slide-item__content">
                        <div class="container">
                            <div class="slide-item__subtitle"  :class="{animateSlideContent: item.animate}" v-if="item.subTitle">{{item.subTitle}}</div>
                            <div class="slide-item__title animate-delay_250ms"  :class="{animateSlideContent: item.animate}">
                                {{item.title}}
                            </div>
                            <div class="slide-item__description animate-delay_350ms"  :class="{animateSlideContent: item.animate}">
                                {{item.description}}
                            </div>

                            <div 
                                class="slide-item__link animate-delay_450ms" 
                                :class="{animateSlideContent: item.animate}" 
                                v-if="item.link" 
                            >
                                <Button
                                    :link="item.link.href"
                                >
                                    {{item.link.label}}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
  
</template>


<style lang="scss" >
@import "../styles/vars.scss";

.slide-item{
    width: 100%;
    height: 530px;
    position: relative;
    &__preview{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__video{
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        position: absolute;
        display: inline-block;
        vertical-align: baseline;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    &__overlay{
        background-color: $overlay;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    &__content{
        position: absolute;
        color: $write;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        text-align: center;
        display: flex;
        justify-content: center;

    }
    &__subtitle{
        margin-bottom: 14px;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    &__title{
        margin-bottom: 14px;
        font-weight: 400;
        @include adaptive-var("font-size", 47, 28, 1);
        line-height: 60px;
    }
    &__description{
        margin-bottom: 10px;
        font-weight: 400;
        @include adaptive-var("font-size", 17, 13, 1);
        line-height: 30px;
    }
    &__link{
        display: block;
        max-width: 234px;
        margin: 0 auto;
    }
}
.swiper-full{
    .slide-item.animate{
        .animateSlideContent{
            transition: all 300ms ease-in;
            transform: translateY(-30px);
            opacity: 0;
            visibility: hidden;
        }
    }
    .swiper-slide-active{
        .slide-item.animate{
            .animateSlideContent{
                transition: all 300ms ease-in;
                transform: translateY(0px);
                opacity: 1;
                visibility: visible;
            }
        }
    }

    .swiper-button-next,.swiper-button-prev{
        color: $link;
    }
    .swiper-button-next, .swiper-rtl .swiper-button-prev{
        right: 6%;
        @media screen and (min-width: 768px) {
            right: 20%;
        }
    }

    .swiper-button-prev, .swiper-rtl .swiper-button-next{
        left: 6%;
        @media screen and (min-width: 768px) {
            left: 20%;
        }
    }

    .animate-delay{
        &_250ms{
            transition-delay: 250ms!important;
        }
        &_350ms{
            transition-delay: 350ms!important;
        }
        &_450ms{
            transition-delay: 450ms!important;
        }
        &_550ms{
            transition-delay: 550ms;
        }
    }
}

</style>