<script  lang="ts">
import { defineComponent } from 'vue';
import TitleDecoration from "../Title.vue";
import Button from "@/components/buttons/Button.vue";

export default defineComponent({
    name: 'SectionMagazine',
    components:{
        TitleDecoration,
        Button,
    }
})
</script>

<template>
    <section class="magazine">
        <div class="container">
            <div class="magazine__title">
                <title-decoration title="Buy 2 mugs and get a coffee magazine free" h="h1" center></title-decoration>
            </div>
            <div class="grid-magazine">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-6">
                                <img class="grid-magazine__primary-img" src="@/assets/img/blog/blog-1.jpg" alt="" />
                            </div>
                            <div class="col-6">
                                <div class="grid-magazine__column">
                                    <div class="col-12">
                                        <img class="grid-magazine__secondary-img" src="@/assets/img/blog/blog-2.jpg" alt="" />
                                    </div>
                                    <div class="col-12">
                                        <img class="grid-magazine__secondary-img" src="@/assets/img/blog/blog-3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="magazine__info-subtitle">

                        </div>
                        <div class="magazine__info-title">

                        </div>
                        <div class="magazine__info__desc">
                            <Button 
                                theme="secondary"
                            >
                                Start Shopping
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "@/styles/vars.scss";

.magazine {
    padding-top: 45px;
    padding-bottom: 100px;
    &__title {
        padding-top: 20px;
        padding-bottom: 60px;
    }
}

.grid-magazine{
    &__primary-img{
        max-width: 330px;
        max-height: 286px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__secondary-img{
        max-height: 130px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    &__column{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-self: stretch;
        height: 100%;
    }
}

</style>
