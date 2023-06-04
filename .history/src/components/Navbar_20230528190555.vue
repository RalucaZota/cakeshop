<template>
  <header :class="{'scrolled-nav' : scrollPosition}">

    <nav class="nav-routes" v-show="!mobile">
      <RouterLink active-class="active" class="nav-elements" :to="{name:'home'}">Home</RouterLink>
      <RouterLink active-class="active" :to="{name:'about'}" class="nav-elements">About</RouterLink>
      <div class="branding">SIGLA</div>
      <RouterLink active-class="active" :to="{name:'products'}" class="nav-elements">Products</RouterLink>
      <RouterLink active-class="active" :to="{name:'contact'}" class="nav-elements">Contact</RouterLink>
      <div class="nav-elements cart">Cart</div>
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-bars" size="lg"/>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
export default {
  components: {
    Home,
    Products,
    About,
    Contact
  },
  data() {}
}
</script>
<style lang="scss">
@import '../styles/Navbar.scss';
</style>
