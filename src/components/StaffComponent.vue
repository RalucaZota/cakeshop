<template>
  <div class="chef-roland">
    <img  src="../assets//images//chefs//chef.png" class="chef-roland-img" />
  
  <div class="chef-roland-details">
    <h3>Roland Pink</h3>
    <p>MasterChef</p>
  </div>
</div>
  <div class="chef">
    <div v-for="{ name, status, img, id } in chefs" :key="name"  :class="{'chefs' : id === 1}">
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
<script setup>
import { chefs } from '../data'

</script>
<style>
@import '../styles/AboutPage/StaffComponent.scss';
</style>
