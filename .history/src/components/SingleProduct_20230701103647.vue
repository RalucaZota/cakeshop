<template>
    <article class="product-article" v-for="{id, image, name, price, quantity, description, ingredients} in  singleProduct" :key="id">
        <div class="product-wrapper-div-img">
            <img :src="image" style="width: 150px; height: 150px;"/>
        </div>
        <div class="product-wrapper-div-details"> 
            <h3>{{ name }}</h3>
            <div>stars</div>
            <p>{{ price }}</p>
            <p> {{ description }}</p>
            <p> {{ ingredients }}</p>

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
      singleProduct: {}
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