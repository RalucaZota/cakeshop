<template>
    <div>
        <h1>CONTACT</h1>
        <Carousel><favorite-product/></Carousel>

    </div>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import FavoriteProduct from '../components/FavoriteProduct.vue';

export default {
    name: 'contact',
    components:{
        Carousel, 
        FavoriteProduct
     

    }
}
</script>