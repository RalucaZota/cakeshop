<template>
  <Carousel :autoplay="2000" :wrap-around="true" class="carousel" style="margin-top: 150px;">
    <product-item v-for="index in 5" :key="index" ></product-item>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import ProductItem from './ProductItem.vue';

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    ProductItem
  },
})
</script>