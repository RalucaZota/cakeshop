<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
  <script>

  import FavoriteProduct from './FavoriteProduct.vue';
  import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    export default {
        components: {
            FavoriteProduct,
            Carousel,
            Slide,
            Pagination,
            Navigation,
      
        },
      data () {
        return {
          data: [
       '1', '2'
      ],
        }
      },
    }
  </script>
  <style lang="scss">
  .carousel{
    margin-top: 150px;
  }
  </style>