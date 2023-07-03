<template>
  <div>
    <h1>About</h1>
    <div  class='universal-card-wrapper' > 
        <universal-card v-for="( momentInfo, id) in momentsInfo" :key="id" >
          <template #img >
          <img :src="momentInfo.img"/></template>
          <template #title >
            <h2>{{ momentInfo.price }} </h2></template>
          <template #text><p> 
            {{ momentInfo.text }}
          </p></template>
        </universal-card>
    </div>
  
    <div  class='universal-card-wrapper' > 
        <universal-card v-for="( info, id) in knowBetterInfo" :key="id" >
          <template #img >
          <img :src="info.img" class="know-us-better-img"/></template>
          <template #title >
            <h2>{{ info.title }} </h2></template>
          <template #text><p> 
            {{ info.text }}
          </p></template>
        </universal-card>
      </div>
      <comment-box/>
      <staff-component/>
  </div>
</template>
<script>
import StaffComponent from '../components/StaffComponent.vue'
import CommentBox from '../components/CommentBox.vue'
import { momentsInfo, knowBetterInfo } from '../data.js'
import UniversalCard from '../components/UniversalCard.vue'
export default {
  name: 'about',
  components: {
    UniversalCard,
    CommentBox,
    StaffComponent
  },
  data() {
    return {
      momentsInfo: momentsInfo,
      knowBetterInfo: knowBetterInfo,
      CommentBox: CommentBox
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
    img.know-us-better-img{
      width: 250px !important;
      height: 250px !important;
    }
  }
  h2{
    text-align: center;
    width: 180px;
  }

}
</style>
