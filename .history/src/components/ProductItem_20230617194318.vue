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
  <script>
  import axios from 'axios'
  import AddtoCartButton from './AddtoCartButton.vue'
  export default {
    name: 'FavoriteProduct',
    components: {
      AddtoCartButton
    },
    data(){
    return {
      products: []
    }
  },
   async created() {

    try {
    const response = await axios.get('http://localhost:3000/desserts')
    this.response = JSON.stringify(response.data)
    this.products = response.data.slice(5, 10)
        console.log(response.data)
        console.log(this.products[0].image)
      
    } catch (error) {
      console.error(error.message)
    }
  

  }}
  
  </script>
  
  <style lang="scss">
  @import '../styles/ProductItem.scss';
  </style>
  