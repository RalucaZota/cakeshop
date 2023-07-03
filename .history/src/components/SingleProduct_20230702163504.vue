<template>
  <article
    class="product-article"
    v-for="{
      id,
      image,
      name,
      price,
      quantity,
      description,
      ingredients,
      raiting,
      category,
      tag
    } in singleProduct"
    :key="id"
  >
    <!-- <img :src="image" class="product-img" /> -->
    <figure class="zoom" onmousemove="zoom(event)" style="background-image:url(image)">
  <img :src=image />
    </figure>

    <div class="product-details">
      <h3>{{ name }}</h3>
      <img :src="raiting" class="star-raiting" />
      <h2>{{ price }}</h2>
      <p><strong>Description: </strong> {{ description }}</p>
      <p><strong>Ingredients: </strong> {{ ingredients }}</p>

      <div class="quantity-div">
        <label>Quantity</label>
        <input :placeholder="quantity" type="number" v-model="value"/>
        <addto-cart-button/>
      </div>
      <div class="category-tag-div">
        <p><strong>Category</strong>: {{ category }}</p>
        
        <p><strong>Tag</strong>: {{ tag }}</p>
      </div>
    </div>
  </article>
</template>
<script>

import AddtoCartButton from './AddtoCartButton.vue'
import axios from 'axios'

export default {
  name: 'single-product',
  components: {
    AddtoCartButton,

  },
  data() {
    return {
      singleProduct: {},
      value: 1
    }
  },
  methods: {
    zoom(e){
        let zoomer = e.target;
        e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
        e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
    }
  },

  async created() {
    try {
      const response = await axios.get('http://localhost:3000/desserts', {
        params: {
          _limit: 1
        }
      })
      this.response = JSON.stringify(response.data)
      this.singleProduct = response.data
      console.log(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}
</script>
<style lang="scss">
@import '../styles/SingleProduct.scss';
</style>
