<template>
  <article v-for="{ id, name, date, review, image, raiting } in reviewComponent" :key="id">
    <h3>title</h3>
    <div>
      <div>
        <img :src="image" />
        <h3>
          <strong>{{ name }}</strong> {{ date }}
        </h3>
        <p>{{ review }}</p>
      </div>
      <img :src="raiting" />
    </div>
  </article>
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
      this.reviiewComponent = response.data
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
