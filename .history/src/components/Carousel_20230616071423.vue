<template>

</template>
  <script>

  import FavoriteProduct from './FavoriteProduct.vue';
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        components: {
            FavoriteProduct,
            VueSlickCarousel
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
  .v-carousel{
    margin-top: 150px;
  }
  </style>