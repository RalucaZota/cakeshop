<template>
  <div>
    <h1>CONTACT</h1>
    <contact-card />
    <form @submit.prevent="submitDetails">
      <h3 class="title">Contact form</h3>
      <contact-form
        v-model.trim.capitalize="state.firstName"
        type="text"
        label="FirstName"
        @blur="v$.firstName.$touch"
      />
      <div class="error-wrapper">
        <p v-for="error in v$.firstName.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>
      <contact-form
        v-model.trim.capitalize="state.lastName"
        type="text"
        label="LastName"
        @blur="v$.lastName.$touch"
      />
      <div class="error-wrapper">
        <p v-for="error in v$.lastName.$errors" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>

      <contact-form
        v-model.trim="state.phoneNumber"
        label="Phone Number"
        @blur="v$.phoneNumber.$touch"
      />
      <div class="error-wrapper">
        <p v-for="error in v$.phoneNumber.$errors" :key="error.$uid">
          The value must be a number!
          {{ error.$message }}
        </p>
      </div>

      <textarea
        v-model.trim="state.message"
        placeholder="Message"
        class="message"
        @blur="v$.message.$touch"
        @input="capitalizeFirstLetter"
      ></textarea>
      <div class="error-wrapper">
        <p v-for="error in v$.message.$errors" :key="error.$uid">
         
          {{ error.$message }}
        </p>
      </div>

      <button class="submit-button" type="submit">SUBMIT</button>

    </form>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import axios from 'axios'
import useValidate from '@vuelidate/core'

import { required, minLength, numeric, helpers } from '@vuelidate/validators'
import ContactCard from '../components/ContactCard.vue'
import ContactForm from '../components/ContactForm.vue'

const contactInfo = ref([])
const successMessage = ref('')
const contactInfoList = ref([])

const state = reactive({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  message: ''
})
function validName(name) {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$")
  if (validNamePattern.test(name)) {
    return true
  }
  return false
}

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('Firstname is required!', required),
      $autoDirty: true,
      minLength: minLength(3),
      name_validation: {
        $validator: validName,
        $message: 'Invalid Name. Valid name only contains letters, dashes (-) and spaces'
      }
    },
    lastName: {
      required,
      $autoDirty: true,
      minLength: minLength(3),
      name_validation: {
        $validator: validName,
        $message: 'Invalid Name. Valid name only contains letters, dashes (-) and spaces'
      }
    },
    phoneNumber: { required, minLength: minLength(10), numeric, $autoDirty: true },
    message: { required, minLength: minLength(3), $autoDirty: true }
  }
})

const v$ = useValidate(rules, state)

const submitDetails = async () => {
  const result = await v$.value.$validate()
  if (result) {
    // Doar dacă validarea este trecută cu succes, se vor trimite datele
    try {
      const sendData = await axios.post(
        'https://cakeshop-7a1db-default-rtdb.firebaseio.com/contactDetails.json',
        state // Trimitem obiectul "state" care conține valorile inputurilor
      )
      if (sendData.status === 200) {
        // Trimiterea a avut succes
        alert('success, form submitted')
        document.querySelector('form').reset()
      }
    } catch (error) {
      console.error('Eroare la cererea POST:', error)
      // Trimiterea a eșuat
      alert('failed, form not submitted')
    }
  } else {
    // Validarea a eșuat, se va afișa un mesaj de eroare
    alert('Failed, please fill in all the fields.')
  }
}

const capitalizeFirstLetter = () => {
  if (state.message) {
    state.message = state.message.charAt(0).toUpperCase() + state.message.slice(1)
  }
}
</script>
<style>
@import '../styles/ContactPage/ContactPage.scss';
</style>
