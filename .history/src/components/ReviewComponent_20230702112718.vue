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
<script>
import axios from 'axios'
export default {
  name: 'review-component',

  data() {
    return {
      reviewComponent: {}
    }
  },

  async created() {
    try {
      const response = await axios.get('http://localhost:3000/reviews')
      this.response = JSON.stringify(response.data)
      this.reviewComponent = response.data
      console.log(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }
}
</script>
<style scoped>
@import '../styles/ReviewComponent.scss';
</style>
