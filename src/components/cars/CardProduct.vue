<script setup  lang="ts">
const _CURRENCY = CURRENCY;
defineProps<{ product: IProductModel, size: ProductCardSize }>()
</script>

<script  lang="ts">
import { IProductModel, ProductCardSize } from '@/types';
import { defineComponent, defineProps } from 'vue';
import { CURRENCY } from "@/const/global";

export default defineComponent({
    name: 'CardProduct',
})
</script>

<template>
    <div class="card-product">
        <div class="card-product__wrap-preview">
            <span class="card-product__counter">0</span>
            <img :src="product.preview" class="card-product__preview"
                :class="{'card-product_full': size === 'full', 'card-product_small': size === 'small'}" alt="">
            <div class="card-product__wrap-composition">
                <ul class="card-product__composition composition-list">
                    <li class="composition-list__item" v-for="item in product.composition" :key="item">
                        {{item}} <span>,</span>
                    </li>
                </ul>
            </div>
        </div>
        <h3 class="card-product__name">
            {{product.name}}
        </h3>
        <p class="card-product__price">
            {{_CURRENCY}}
            {{product.price[product.size[0]]}}
        </p>
    </div>
</template>

<style lang="scss">
@import "@/styles/vars.scss";

.card-product {
    width: 100%;

    &__preview {
        max-height: 540px;
        width: 100%;
        height: auto;
        object-fit: cover;
        object-position: center;
        border-radius: 6px;
    }

    &_full {
        height: 540px;
    }

    &_small {
        height: 380px;
    }

    &__price {
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        text-align: center;
        color: rgba(29, 31, 46, 0.7);
    }

    &__name {
        padding-bottom: 8px;
        font-weight: 400;
        font-size: 28px;
        line-height: 30px;
        text-align: center;
        color: $black;
    }

    &__wrap-preview {
        margin-bottom: 35px;
        position: relative;
        overflow: hidden;

        &:hover {
            @media screen and (min-width: 996px) {
                .card-product__wrap-composition {
                    opacity: 1;
                    transform: translateY(0px);
                    transition: opacity 300ms ease-in, transform 300ms ease-in;
                }
            }

        }
    }

    &__counter {
        position: absolute;
        right: 12px;
        top: 12px;
        width: 28px;
        height: 28px;
        border-radius: 46px;
        font-size: 14px;
        font-weight: bold;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $link;
        color: $write;
        transform: translateX(10px);
        opacity: 0;
        transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;

        &.show {
            transform: translateX(0px);
            opacity: 1;
        }
    }

    &__wrap-composition {
        position: absolute;
        bottom: 0px;
        right: 0px;
        background: inherit;
        width: 100%;
        height: 60px;
        color: $write;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(4px);
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms ease-in, transform 300ms ease-in;

        @media screen and (min-width: 996px) {
            opacity: 0;
            transform: translateY(60px);
        }
    }

    &__composition {
        padding: 10px;
    }

    .composition-list {
        display: flex;
        align-items: center;
        height: 100%;

        &__item {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 2.5px;

            &>span {
                padding-right: 6px;
                display: block;
            }

            &:last-child {
                &>span {
                    display: none;
                }
            }
        }
    }
}
</style>
