<template>
    <article>
        <div>
            img
        </div>
        <div> 
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