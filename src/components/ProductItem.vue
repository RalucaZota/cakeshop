<template>
    <article class="favorite-product" v-for="(product, id) in products" :key="id">
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
  </template>
  <script setup>
  import axios from 'axios'
  import AddtoCartButton from './AddtoCartButton.vue'
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
  @import '../styles/Products/ProductItem.scss';
  </style>
  