<template>
  <div>
    <h1>CONTACT</h1>
    <contact-card />
    <form @submit.prevent="submitDetails">
      <h3 class="title">Contact form</h3>
      <contact-form v-model="firstName" type="text" label="FirstName" />
      {{ firstName }}
      <contact-form v-model="lastName" type="text" label="LastName" />
      {{ lastName }}
      <contact-form v-model="message" type="text" label="Message" />
      {{ message }}
      <contact-form v-model="phoneNumber" label="Phone Number" />
      {{ phoneNumber }}
      <button class="submit-button" type="submit">SUBMIT</button>
      <div>
        <p v-if="contactInfoList.length > 0">{{ successMessage }}</p>
      </div>
      <div v-for="(contact, index) in contactInfoList" :key="index">
      <p>{{ contact.firstName }}</p>
      <p>{{ contact.lastName }}</p>
      <p>{{ contact.message }}</p>
      <p>{{ contact.phoneNumber }}</p>
    </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import ContactCard from '../components/ContactCard.vue'
import ContactForm from '../components/ContactForm.vue'

const firstName = ref('')
const lastName = ref('')
const message = ref('')
const phoneNumber = ref('')
const contactInfo = ref([])
const successMessage = ref('')
const contactInfoList = ref([]);
const submitDetails = async () => {
  const contactDetails = {
    firstName: firstName.value,
    lastName: lastName.value,
    message: message.value,
    phoneNumber: phoneNumber.value
  }
  try {
    const sendData = await axios.post(
      'https://cakeshop-7a1db-default-rtdb.firebaseio.com/contactDetails.json',
      contactDetails
    )
    if (sendData.status === 200) {
      
        console.log(sendData.config.data)
    }
  } catch (error) {
    console.error('Eroare la cererea POST:', error)
  }
}

const fetchData = async () => {
  try {
    const response = await axios.get(
      'https://cakeshop-7a1db-default-rtdb.firebaseio.com/contactDetails.json'
    )
    contactInfo.value = response.data
    console.log(contactInfo.value);
    contactInfoList.value = Object.values(contactInfo.value);
    console.log(contactInfoList.value);
    
    if (response.status === 200 && contactInfoList.value.length > 0) {
        document.querySelector('form').reset();
      successMessage.value = 'we did it'
    } else {
      successMessage.value = 'some error occured'
    }
  } catch (error) {
    console.error('Eroare la cererea GET:', error)
  }
}

fetchData()
</script>
<style>
@import '../styles/ContactPage/ContactPage.scss';
</style>
