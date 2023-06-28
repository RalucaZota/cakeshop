<template>
    <div>
        <h1>CONTACT</h1>
        <Carousel/>
        <Carousel2/>
    </div>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import Carousel2 from '../components/Carousel2.vue';
export default {
    name: 'contact',
    components:{
        Carousel, 
        Carousel2

    }
}
</script>