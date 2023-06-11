<template>
    <article class="favorite-product">
        <div class="product-image-div">
            <img  src='../assets/images/cakes/redvelvetcake.jpg' alt="red velvet cake" class="product-image"/>
        </div>
        <addto-cart-button/>
        <div class="product-title">Red Velvet cake
        </div>
        <h2 class="product-price"> $5</h2>
    </article>
</template>
<script> 
import AddtoCartButton from './AddtoCartButton.vue'
export default {
    name: 'FavoriteProduct',
    components:{
        AddtoCartButton
    }
}
</script>

<style lang="scss">
@import '../styles/FavoriteProduct.scss';
</style>