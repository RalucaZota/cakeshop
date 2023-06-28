<template>
    <div>
        <h1>CONTACT</h1>
        <Carousel><product-item/></Carousel>

    </div>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import ProductItem from '../components/ProductItem.vue';

export default {
    name: 'contact',
    components:{
        Carousel, 
        ProductItem
     

    }
}
</script>