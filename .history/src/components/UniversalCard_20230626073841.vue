<template>
  <div>
    <div>
      <slot name="img"> </slot>
    </div>
    <div class="card-details">
      <slot name="price"> </slot>
      <slot name="text"> </slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'universal card'
}
</script>
