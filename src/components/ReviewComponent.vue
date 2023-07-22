<template>
  <h3 class="title">Reviews</h3>
  <div class="reviews">
    <article
      v-for="{ id, name, date, review, image, raiting } in reviewComponent"
      :key="id"
      class="review-article"
    >
      <div>
        <div class="review-details">
          <img :src="image" class="review-image" />
          <div>
            <h3>
              <strong>{{ name }}</strong>{{ date }} 
            </h3>
            <p>{{ review }}</p>
          </div>
        </div>
        <img :src="raiting" class="raiting-image" />
      </div>
    </article>
  </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue';
const reviewComponent= ref([]);
(async () => {
try {
      const response = await axios.get('http://localhost:3000/reviews')
      response.value = JSON.stringify(response.data)
      reviewComponent.value = response.data
      console.log(response.value.data)
    } catch (error) {
      console.error(error.message)
    }
  })();
</script>
<style scoped>
@import '../styles/Products/ReviewComponent.scss';
</style>
