<template>
    <div id="example">
  <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3">
    <slide v-for="(slide, i) in slides" :key="i">
      <span class="title">You know</span>
      <p>You know, being a test pilot isn't always the healthiest business in the world.</p> {{ slide  }}
    </slide>
  </carousel-3d>
</div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default ({
  name: 'Carousel2',
  data() {
    return {
    slides: 7
  }},
  components: {
    Carousel3d,
    Slide
   
  }
})
</script>
<style scoped lang="scss">
.carousel-3d-container {
  .carousel-3d-slide {
    padding: 20px;
    
    .title { font-size: 22px; }
  }
}
</style>