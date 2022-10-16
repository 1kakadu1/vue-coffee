<template>
    <div class="cart-button">
        
        <svg class="cart-button__icon" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M0 0H16V20H0V0Z" fill="url(#pattern0)"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_10_34" transform="scale(0.03125 0.025)"/>
            </pattern>
            <image id="image0_10_34" width="32" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAAAWBJREFUWAljYCAdWAC1zADi60D8CYg/A/FtIF4IxB5ATDPADjR5JhD/J4C3AuUFgZiqgAlo2hogJmQ5TP4kUC0XNV2QQYLlMEe0UssBoKB/jeYAUJy7AjEvEIN8agbEx4AYZjmI/gHEVImKIDSDnwP58kCMDkAOuQDEyI5IQVeEzgfFLSHgiaZgPpD/EE0MxP0GxAtADCTggMQmm3kGqBPZV5Z4TNJGU3sJj1qipV6hGSqFR6c4mto3eNQSLQVKTMghwIFHJyjBIqv9iUctWIoRqoGQOprJE5MIaWY5yOBRB7BgCV9QukAGoESFDNDlkeVAbELqUeRHo2BIhMBjpEh+gsTGxURWg6wXl3qUkgslgUB1gJpZj4AYZJgXVAwfBVIDUgvSg62JBrIDjrGVhIRSOVA/RQDFk0MiDVDkXUKaR0NgNARGQ2A0BEZDYDQEBjwEsLUHCFVgVJUf8BAYdQAAA1xswV7hEbkAAAAASUVORK5CYII="/>
            </defs>
        </svg>

        <span class="cart-button__label">CART</span>

        <div class="cart-button__badge">
            {{count}}
        </div>
    </div>
</template>

<script setup  lang="ts">
    defineProps<{ open: boolean, onToggle: (value: boolean)=> void, count: number }>()
</script>

<script  lang="ts">
import { defineComponent, defineProps } from 'vue';
export default defineComponent( {
  name: 'CartButton',
  data(){
    return{}
  },
  methods:{
  },
})
</script>

<style lang="scss">
    @import "@/styles/vars.scss";

    .cart-button{
        display: flex;
        align-items: center;
        position: relative;
        padding-top: 6px;
        padding-bottom: 6px;
        cursor: pointer;
        transition: 300ms all ease;
        max-width: 92px;
        &::before{
            content: "";
            position: absolute;
            width: 100%;
            background-color: rgba(162, 95, 75, 0.3);
            height: 2px;
            bottom: 0px;
            transition: 300ms  background-color ease;
        }
        &:hover::before{
            transition: 300ms  background-color ease;
            background-color: $link;
        }
        &__label{
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: $black;
            padding-left: 10px;
            padding-right: 8px;
            transition: 300ms color ease;
        }
        &:hover .cart-button__label{
             color: $link;
             transition: 300ms color ease;
        }
        &__badge{
            background-color: $badge;
            font-size: 12px;
            line-height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            width: 22px;
            height: 22px;
            border-radius: 22px;
            transition: 300ms  background-color ease;
        }
        &:hover .cart-button__badge{
            background-color: $link;
            transition: 300ms  background-color ease;
        }
    }
</style>
