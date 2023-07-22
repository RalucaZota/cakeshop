<template>
  <section>
    <Carousel :autoplay="3000" :itemsToShow="3.95" :wrapAround="true" :transition="500" class="carousel">
  <Slide v-for="(product, id) in products" :key="id">
    <article class="favorite-product">
      <div class="product-image-div">
        <img
        :src="product.image"
        alt="red velvet cake"
        class="product-image"
        />
      </div>
      <div class="details-section">
        <addto-cart-button />
        <h2 class="product-title">{{ product.name }}</h2>
        <h2 class="product-price">{{ product.price }}</h2>

      </div>
    </article>
  </Slide>
  </Carousel>
</section>
   

</template>
<script setup>
import AddtoCartButton from './AddtoCartButton.vue';
import axios from 'axios';
import { defineComponent } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { ref } from 'vue';

  const products = ref([]);
  (async () => {
  try {
    const response = await axios.get('http://localhost:3000/desserts');
    products.value = response.data.slice(5, 9);
    console.log(response.data);
    console.log(products.value[0].image);
  } catch (error) {
    console.error(error.message);
  }
})();

</script>

<style lang="scss">
@import '../styles/HomePage/FavoriteProduct.scss';

</style>
