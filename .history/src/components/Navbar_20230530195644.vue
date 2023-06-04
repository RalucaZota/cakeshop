<template>
  <header :class="{'scrolled-nav' : scrollPosition}">

    <nav class="nav-routes" v-show="!mobile">
      <RouterLink active-class="active" to="/" class="nav-elements" >Home</RouterLink>
      <RouterLink active-class="active" to="/about" class="nav-elements">About</RouterLink>
      <div class="branding">SIGLA</div>
      <RouterLink active-class="active" to="/products" class="nav-elements">Products</RouterLink>
      <RouterLink active-class="active" to="contact" class="nav-elements">Contact</RouterLink>
      <div class="nav-elements cart">Cart</div>
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-bars" size="lg" @click="toggleMobileNaV" v-show="mobile" :class="{'icon-active' : mobileNav}"/>
      </div>
      <!-- <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><RouterLink active-class="active" :to="{name:'home'}" class="nav-elements">Home</RouterLink></li>
          <li><RouterLink active-class="active" :to="{name:'about'}" class="nav-elements">About</RouterLink></li>
          <li><RouterLink active-class="active" :to="{name:'products'}" class="nav-elements">Products</RouterLink></li>
          <li><RouterLink active-class="active" :to="{name:'contact'}" class="nav-elements">Contact</RouterLink></li>

        </ul>
      </transition> -->
    <RouterView/>
    </nav>
  </header>

</template>
<script>
import {RouterLink, RouterView} from "vue-router"
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
