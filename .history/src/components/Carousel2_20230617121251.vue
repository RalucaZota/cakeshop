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
new Vue({
  el: '#example',
  data() {
    return {
    slides: 7
  }},
  components: {
    'carousel-3d': window['carousel-3d'].Carousel3d,
    'slide': window['carousel-3d'].Slide
  }
})</script>
<style scoped lang="scss">
.carousel-3d-container {
  .carousel-3d-slide {
    padding: 20px;
    
    .title { font-size: 22px; }
  }
}
</style>