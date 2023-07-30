<template>
  <div class="contact-wrapper">
    <universal-card
      class="contact-card"
      v-for="{ icon, title, text, index } in contactDetails"
      :key="index"
    >
      <template #img>
        <div class="contact-icon">
          <font-awesome-icon :icon="icon" size="xl" /></div
      ></template>
      <template #title
        ><p >{{ title }}</p></template
      >
      <template #text> {{ text }}</template>
    </universal-card>
  </div>
</template>
<script setup>
import UniversalCard from './UniversalCard.vue'
import { faPhone, faEnvelope, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
const contactDetails = ref([
  { icon: faPhone, title: 'Phone', text: '456789 0000 - 123 - 456789' },
  { icon: faEnvelope, title: 'Email', text: 'info@example.com' },
  {
    icon: faLocationDot,
    title: 'Address',
    text: 'No: 58 A, East Madison Street Baltimore MD USA 4508'
  },
  { icon: faClock, title: 'Time', text: 'Mon – Sat 9 am to 8 pm Sun – 10 am to 3 pm' }
])
</script>
<style>
@import '../styles/ContactCard.scss';
</style>
