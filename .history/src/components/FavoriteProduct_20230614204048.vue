<template>
  <div v-for="(product, id) in products" :key="id">
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
    </div>
        <button>click</button>
</template>
<script>
import AddtoCartButton from './AddtoCartButton.vue'
import axios from 'axios'
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
    const response = await axios.get('http://localhost:3000/desserts',{
      params: {
        _id: 1,
        _id: 5,
        _id: 7
      }
    })
    this.response = JSON.stringify(response.data)
    this.products = response.data
        console.log(response.data)
        console.log(this.products[0].image)
      
    } catch (error) {
      console.error(error.message)
    }
  

  }}

</script>

<style lang="scss">
@import '../styles/FavoriteProduct.scss';
</style>
