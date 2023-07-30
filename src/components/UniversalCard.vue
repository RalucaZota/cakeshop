<template>
  <div>
    <slot name="img"> </slot>

    <div class="universal-card-details">
      <slot name="title"> </slot>
      <slot name="text"> </slot>
    </div>
  </div>
</template>
<script setup></script>
<style>
@import '../styles/UniversalCard.scss';
</style>
