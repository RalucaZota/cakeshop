<template>
  <div>
    <div class="parent">
        <div>Product </div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div style="display: flex; align-items: center; gap: 5px;"> <img src="../assets/images/cakes/birthday-cake.jpg" style="width: 100px; height: 100px;"/> <span><h3>Birthday cake</h3></span></div>
        <div>$80,10</div>
        <div>  <input :placeholder="value" type="number" v-model="value" style="border: 2px solid pink; width: 60px;"/></div>
        <div>$80,10</div>
    </div>
    <div>Total products price: $80.10</div>
    <button >hgjgfc</button>
  </div>
</template>
<script setup>

</script>
<style lang="scss">
@import '../styles/CartModal.scss';
</style>
