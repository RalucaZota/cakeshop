<template>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
        >
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">
              {{ slide }} Slide
              <favorite-product/>
              <favorite-product/>
            </div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </template>
  <script>
  import FavoriteProduct from './FavoriteProduct.vue';
    export default {
        components: {
            FavoriteProduct
        },
      data () {
        return {
          colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
          ],
          slides: [
            'First',
            'Second',
        
          ],
        }
      },
    }
  </script>
  <style lang="scss">
  .v-carousel{
    padding-top: 100px;
  }
  </style>