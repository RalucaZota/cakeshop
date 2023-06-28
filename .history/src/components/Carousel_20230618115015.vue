<template>
  <Carousel :autoplay="3000" :wrap-around="true" class="carousel" style="margin-top: 150px;">
    <Slide v-for="(clientInfo, id) in ClientsInfo" :key="id" >
      <div class="carousel__item" style="background-color: pink;">

        <div>
          <img /> {{ clientInfo.img }}
        </div>
        <h2>{{ clientInfo.name }}</h2>
        <p>{{ clientInfo.opinion }}</p>
      </div>
      <slot :client="ClientsInfo"></slot>
      <slot :mama="mama"></slot>
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