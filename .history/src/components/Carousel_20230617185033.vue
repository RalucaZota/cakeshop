<template>
  <Carousel :autoplay="2000" :wrap-around="true" class="carousel" style="margin-top: 150px;">
    <Slide >
      <div class="carousel__item" style="background-color: blue;">xdfg</div>
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

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
  },
})
</script>