<template>
  <div class="row">
    <div class="col-sm">
      <vue-carousel :data="data"></vue-carousel>
    </div>
    <div class="col-sm mt-3 mt-sm-0">
      <vue-carousel :data="data" indicator-trigger="hover"></vue-carousel>
    </div>
  </div>
</template>
  <script>
  import FavoriteProduct from './FavoriteProduct.vue';
    export default {
        components: {
            FavoriteProduct
        },
      data () {
        return {
          data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
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