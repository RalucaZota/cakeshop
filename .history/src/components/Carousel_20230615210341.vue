<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>
  <script>
    import VueSlickCarousel from 'vue-slick-carousel'
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