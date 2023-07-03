<template>
  <div class="chef-roland">
    <img  src="../assets//images//chefs//chef.png" class="chef-roland-img" />
  </div>
  <div class="chef-details">
    <h3>Ronald Pink</h3>
    <p>Chef</p>
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
