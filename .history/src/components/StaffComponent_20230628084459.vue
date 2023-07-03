<template>
    <div class="chef">
  <div v-for="{ name, status, img } in chefs" :key="name" >
      <div class="chef-img-div">
        <img :src="img" class="chef-img" />
      </div>
      <h3>{{ name }}</h3>
      <p>{{ status }}</p>
    </div>
  </div>
</template>
<script>
import { chefs } from '../data'
export default {
  name: 'staff-component',
  data() {
    return {
      chefs: chefs
    }
  }
}
</script>
<style>
@import '../styles/StaffComponent.scss';
</style>
