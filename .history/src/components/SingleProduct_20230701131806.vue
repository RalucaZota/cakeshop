<template>
    <article class="product-article" v-for="{id, image, name, price, quantity, description, ingredients} in  singleProduct" :key="id">
        <div class="product-wrapper-div-img" @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave" @mousemove="handleMouseMove">
            <img :src="image" class="single-product-img zoomed-area"     :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
        v-show="isHovered" />
        </div>
        <div class="product-wrapper-div-details"> 
            <h3>{{ name }}</h3>
            <div class="star-raiting">stars</div>
            <h2>{{ price }}</h2>
            <p> <strong>Description: </strong> {{ description }}</p>
            <p> <strong>Ingredients: </strong> {{ ingredients}}</p>

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
      isHovered: false,
      mouseX: 0,
      mouseY: 0,
      
    }
},
    methods:{
        handleMouseEnter(){
            this.isHovered = true;
        },
        handleMouseLeave(){
            this.isHovered = true;
        },
        handleMouseMove(event) {
    this.mouseX = event.offsetX;
    this.mouseY = event.offsetY;
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
  

  },
  mounted() {
  const canvas = this.$refs.canvas;
  const ctx = canvas.getContext('2d');
},
updateCanvas(event) {
  if (this.isHovered) {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext('2d');
  
    const img = new Image();
    img.src = '../assets/images/my-image.jpg';
  
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        event.offsetX - 50, // Setarea coordonatei x a zonei de zoom
        event.offsetY - 50, // Setarea coordonatei y a zonei de zoom
        100, // Setarea lățimii zonei de zoom
        100, // Setarea înălțimii zonei de zoom
        0, // Setarea coordonatei x în canvas unde se va desena zona de zoom
        0, // Setarea coordonatei y în canvas unde se va desena zona de zoom
        canvas.width, // Setarea lățimii zonei de zoom în canvas
        canvas.height // Setarea înălțimii zonei de zoom în canvas
      );
    };
  }
},}

 </script>
 <style>
 @import '../styles/SingleProduct.scss';
 </style>