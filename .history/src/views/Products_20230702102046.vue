<template>
    <div>
        <h1>PRODUCTS</h1>
       <single-product/>
       <review-component>tertgtr</review-component>
    </div>
</template>
<script>
import ReviewComponent from '../components/ReviewComponent.vue';
import SingleProduct from '../components/SingleProduct.vue';
export default {
    name: 'products',
    components:{
        SingleProduct,
        ReviewComponent
        
   
    }
}
</script>