<template>
    <Carousel :autoplay="3000" :itemsToShow="3.95" :wrapAround="true" :transition="500" class="carousel">
  <Slide v-for="(product, id) in products" :key="id">
    <article class="favorite-product">
      <div class="product-image-div">
        <img
        :src="product.image"
        alt="red velvet cake"
        class="product-image"
        />
      </div>
      <div class="details-section">
        <addto-cart-button />
        <h2 class="product-title">{{ product.name }}</h2>
        <h2 class="product-price">{{ product.price }}</h2>

      </div>
    </article>
  </Slide>
  </Carousel>
   

</template>
<script>
import AddtoCartButton from './AddtoCartButton.vue'
import axios from 'axios'
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
export default {
  name: 'FavoriteProduct',
  components: {
    AddtoCartButton,
    Carousel,
    Slide,
    Pagination,

  },
  data(){
    return {
      products: []
    }
  },
   async created() {

    try {
    const response = await axios.get('http://localhost:3000/desserts')
    this.response = JSON.stringify(response.data)
    this.products = response.data.slice(5, 9)
        console.log(response.data)
        console.log(this.products[0].image)
      
    } catch (error) {
      console.error(error.message)
    }
  

  }}

</script>

<style lang="scss">
@import '../styles/FavoriteProduct.scss';

.carousel{
  margin-top: 150px;
 
}
.carousel__item {
  background: red;
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
