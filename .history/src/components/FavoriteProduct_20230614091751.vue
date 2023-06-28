<template>
  <div v-for="(product, id) in products" :key="id">
    <article class="favorite-product">
      <div class="product-image-div">
        <img
        :src="product.image"
        alt="red velvet cake"
        class="product-image"
        style="width: 100px; height: 100px;"
        />
      </div>
      <div class="details-section">
        <h2>{{ product.name }}</h2>
        <h2>{{ product.price }}</h2>
        <addto-cart-button />

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
    const response = await axios.get('http://localhost:3000/desserts')
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
