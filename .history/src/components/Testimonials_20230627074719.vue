<template>
  <Carousel  :autoplay="3000"  :wrap-around="true" class="carousel" style="margin-top: 150px;">
    <Slide v-for="( clientInfo, id) in ClientsInfo" :key="id" >
      <div class="carousel-item" >
        <div class="images-wrapper">
          <img :src="clientInfo.img" class="client-img"/>
          <img src="../assets/images/details.png" class="details-img"/>
     </div>
     <div class="client-details"> 

       <h5 class="client-name">{{ clientInfo.name }}</h5>
       <p class="client-opinion">{{ clientInfo.opinion }}</p>
     </div>
      </div>
      </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import  ClientsInfo  from '../data.js'
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
  data() {
    return {

    }
  },
})
</script>
<style scoped>
@import '../styles/Testimonials.scss';
</style>