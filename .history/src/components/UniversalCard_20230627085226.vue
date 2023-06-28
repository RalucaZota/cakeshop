<template>
  <div class="universal-card">
    <div class="universal-card-img">
      <slot name="img"> </slot>
    </div>
    <div class="universal-card-details">
      <slot name="title"> </slot>
      <slot name="text"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'universal card'
}
</script>
<style >
@import '../styles/UniversalCard.scss';
</style>
