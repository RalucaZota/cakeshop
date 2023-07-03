<template>
    <article class="product-article" v-for="{id, image, name, price, quantity, description, ingredients} in  singleProduct" :key="id">
        <div class="product-wrapper-div-img">
            <img :src="image" class="single-product-img" />
        </div>
        <div class="product-wrapper-div-details"> 
            <h3>{{ name }}</h3>
            <div class="star-raiting">stars</div>
            <h2>{{ price }}</h2>
            <p> Description:{{ description }}</p>
            <p> Ingredients:{{ ingredients}}</p>

            <div> 
                <input :placeholder="quantity"/>
                <addto-cart-button/>
            </div>
        </div>
    </article>
</template>
<script>

import AddtoCartButton from './AddtoCartButton.vue'
import axios from 'axios'

export default {
    name: 'single-product',
    components:{
        AddtoCartButton

    },
    data(){
    return {
      singleProduct: {},
      
    }
  },
   async created() {

    try {
    const response = await axios.get('http://localhost:3000/desserts', {
        params: {
            _limit: 1,
        },
    })
    this.response = JSON.stringify(response.data)
    this.singleProduct = response.data
        console.log(response.data)
        
      
    } catch (error) {
      console.error(error.message)
    }
  

  }}

 </script>
 <style>
 @import '../styles/SingleProduct.scss';
 </style>