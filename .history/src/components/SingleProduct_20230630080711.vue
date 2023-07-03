<template>
    <article class="product-article">
        <div class="product-wrapper-div-img">
            <img/>img
        </div>
        <div class="product-wrapper-div-details"> 
            <h3>title</h3>
            <div>stars</div>
            <p>price</p>
            <p>description</p>
            <div> 
                <p>quantity</p>
                <input/>
                <addto-cart-button/>
            </div>
        </div>
    </article>
</template>
<script>
import AddtoCartButton from './AddtoCartButton.vue'

export default {
    name: 'single-product',
    components:{
        AddtoCartButton

    }
}
 </script>