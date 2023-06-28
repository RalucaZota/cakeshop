<template>
  <div>
    <h1>About</h1>
    <div  class='universal-card-wrapper' > 
        <universal-card v-for="( momentInfo, id) in momentsInfo" :key="id" >
          <template #img >
          <img :src="momentInfo.img"/></template>
          <template #price >
            <h2>{{ momentInfo.price }} </h2></template>
          <template #text><p> 
            {{ momentInfo.text }}
          </p></template>
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
        { id: 1, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/backer-year.png', text: ' cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati111?' },
        { id: 2, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/best-cakeshop.png', text: 'cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?222' },
        { id: 3, price: 'Backer of the year 2022', img: '../src/assets/images/bestMoments/backer-year.png', text: 'cupiditate! Unde adipisci nisi animi quae quis laboriosam obcaecati?333' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.universal-card-wrapper{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 150px;
  img{
    width: 200px;
  }
  h2{
    text-align: center;
    width: 180px;
  }

}
</style>
