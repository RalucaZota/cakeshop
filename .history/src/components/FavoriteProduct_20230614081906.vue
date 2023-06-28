<template>
  <article class="favorite-product">
    <div class="product-image-div">
      <img
        src="../assets/images/cakes/redvelvetcake.jpg"
        alt="red velvet cake"
        class="product-image"
      />
    </div>
    <div class="details-section">
    <addto-cart-button />
        <button @click="response()">click</button>
   <ul v-for="(product, id) in products" :key="id">
      <li>
        <h2>{{ product.name }}</h2>
        <h2>{{ product.price }}</h2>
        <img :src="product.image" style="width: 100px; height: 100px;"/>
      </li>
    </ul> 
      <h3 class="product-title">Red Velvet cake</h3>
      <h2 class="product-price">$5</h2>
    </div>
  </article>
</template>
<script>
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
    this.products = response.data
        console.log(response.data)
        console.log(this.products[0].image)
      
    } catch (error) {
      console.error(error.message)
    }
  
  response();
  }}

</script>

<style lang="scss">
@import '../styles/FavoriteProduct.scss';
</style>
