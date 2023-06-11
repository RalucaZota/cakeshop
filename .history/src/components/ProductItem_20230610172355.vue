<template>
    <article class="product-item">
      <div class="product-image-div">
        <img
          src="../assets/images/cakes/birthday-cake.jpg"
          alt="birthday cake"
          class="product-image"
        />
      </div>
      <div class="details-section">
      <addto-cart-button />
        <h3 class="product-title">Birthday cake</h3>
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
    }
  }
  </script>
  
  <style lang="scss">
  @import '../styles/ProductItem.scss';
  </style>
  