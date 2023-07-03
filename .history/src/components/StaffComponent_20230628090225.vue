<template>
  <div class="chef-img-div">
    <img src="../src/images/chefs/chef.png" class="chef-img" />
  </div>
  <div class="chef-details">
    <h3>{{ name }}</h3>
    <p>{{ status }}</p>
  </div>
  <div class="chef">
    <div v-for="{ name, status, img } in chefs" :key="name">
      <div class="chef-img-div">
        <img :src="img" class="chef-img" />
      </div>
      <div class="chef-details">
        <h3>{{ name }}</h3>
        <p>{{ status }}</p>
      </div>
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
