<template>
    <article class="favorite-product">
        <div class="product-image">img</div>
        <addto-cart-button/>
        <div class="product-title">title 
        </div>
        <h2 class="product-price">price</h2>
    </article>
</template>
<script> 
import AddtoCartButton from './AddtoCartButton.vue'
export default {
    name: 'FavoriteProduct'
}
</script>

<style lang="scss">
@import '../styles/FavoriteProduct.scss';
</style>