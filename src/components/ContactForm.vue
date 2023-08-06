<template>
  <div class="input-wrap">
    <input
    class="contact-input"
      :placeholder="label"
      :value="modelValue"
      @input="emitValue"

    />
  </div>
</template>
<script setup>
const props = defineProps({
  label: {
    type: [String, Number],
    default: ''
  },
  modelModifiers: { default: () => ({}) },
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>
<style>
@import '../styles/ContactForm.scss';
</style>
