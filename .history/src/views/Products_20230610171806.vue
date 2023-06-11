<template>
    <div>
        <h1>PRODUCTS</h1>
        <product-item/>
    </div>
</template>
<script>
import ProductItem from '../components/ProductItem.vue';

export default {
    name: 'products',
    components:{
        ProductItem,
   
    }
}
</script>