<template>
  <Carousel :autoplay="2000" :wrap-around="true" class="carousel" style="margin-top: 150px;">
    <Slide v-for="slide in 10" :key="slide" >
      <div class="carousel__item" style="background-color: blue;">{{ slide }}</div>
      <favorite-product v-for="item in items" :key="item.id" class="carousel__item" />
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import FavoriteProduct from './FavoriteProduct.vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import FavoriteProduct from './FavoriteProduct.vue'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    FavoriteProduct,
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ]
    };
  },
})
</script>