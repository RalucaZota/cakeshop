<template>
  <div>
    <h1>About</h1>
    <div v-for="( momentInfo, id) in momentsInfo" :key="id"> 
        <universal-card >
          <template #img >{{ momentInfo.img }}</template>
          <template #title >{{ momentInfo.price }}</template>
          <template #text>{{ momentInfo.text }}</template>
        </universal-card>
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
        { id: 1, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/backer-year.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolore reiciendis cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati111?' },
        { id: 2, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/best-cakeshop.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolore reiciendis cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?222' },
        { id: 3, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/backer-year.png', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolore reiciendis cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?333' }
      ]
    }
  }
}
</script>
