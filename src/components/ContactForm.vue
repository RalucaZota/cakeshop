<template>
  <div class="input-wrap">
    <input
    class="contact-input"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs" 
    />
  </div>
</template>
<script setup>
defineProps({
  label: {
    type: [String, Number],
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>
<style>
@import '../styles/ContactForm.scss';
</style>
