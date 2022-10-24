<script setup  lang="ts">
type Columntype = "col-md-6" | "col-md-3" | "col-md-4" | "col-md-12" | "col-12" | "col-6" | "col-3" | "col-4" | "col-lg-12" | "col-lg-6" | "col-lg-3" | "col-lg-4" | "col-xxl-12" | "col-xxl-6" | "col-xxl-3" | "col-xxl-4" | "col-xl-12" | "col-xl-6" | "col-xl-3" | "col-xl-4";
defineProps<{ products: IProductModel[], title: string, cardSize: ProductCardSize, column: Columntype[] }>()
</script>

<script  lang="ts">
import { IProductModel, ProductCardSize } from '@/types';
import { defineComponent, defineProps } from 'vue';
import TitleDecoration from "@/components/Title.vue";
import CardProduct from "@/components/cars/CardProduct.vue";

export default defineComponent({
    name: 'SectionProducts',
    components: {
        TitleDecoration,
        CardProduct
    }
})
</script>

<template>
    <section class="products-section">
        <div class="container">
            <div class="products-section__title">
                <title-decoration :title="title" h="h1" center></title-decoration>
            </div>
            <div class="row gy-5">
                <div :class="column.join(' ')" v-for="item in products" :key="item.id">
                    <card-product :product="item" :size="cardSize"></card-product>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "@/styles/vars.scss";

.products-section {
    &__title {
        padding-top: 45px;
        padding-bottom: 100px;
    }
}
</style>
