<template>
    <div>
        <h1>PRODUCTS</h1>
       <single-product/>
    </div>
</template>
<script>

import SingleProduct from '../components/SingleProduct.vue';
export default {
    name: 'products',
    components:{
        SingleProduct
        
   
    }
}
</script>