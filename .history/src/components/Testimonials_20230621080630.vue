<template>
  <Carousel  :wrap-around="true" class="carousel" style="margin-top: 150px;">
    <Slide v-for="( clientInfo, id) in ClientsInfo" :key="id" >
      <div class="carousel-item" >
        <div class="images-wrapper">
          <img :src="clientInfo.img" class="client-img"/>
          <img src="../assets/images/details.png"/>
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
     ClientsInfo: [
      {id: 1, name: 'Sam Smith', opinion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolore reiciendis cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?', img: '../src/assets/images/cakes/tiramisu.jpg'  }, 
      {id: 2, name: 'Olga Bacari', opinion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolore reiciendis cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?', img: '../src/assets/images/cakes/tiramisu.jpg'  },
      {id: 3, name: 'Richard Muller', opinion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolore reiciendis cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?', img: '../src/assets/images/cakes/tiramisu.jpg'  },

     ]
     , mama: 'blas'
    }
  },
})
</script>
<style scoped>
@import '../styles/Testimonials.scss';
</style>