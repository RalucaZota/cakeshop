<template>
  <div>
    <h1>About</h1>
    <div v-for="( momentInfo, id) in momentsInfo" :key="id"> 
        <universal-card />
    </div>
  </div>
</template>
<script>
import UniversalCard from '../components/UniversalCard.vue'
export default {
  name: 'about',
  components: {
    UniversalCard
  },
  data() {
    return {
      momentsInfo: [
        { id: 1, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/backer-year.png', text: lorem20 },
        { id: 2, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/best-cakeshop.png', text: lorem20 },
        { id: 3, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/backer-year.png', text: lorem20 }
      ]
    }
  }
}
</script>
