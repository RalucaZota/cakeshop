<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav class="nav-routes" v-show="!mobile">
      <ul>
        <li>
          <RouterLink active-class="active" :to="{ name: 'home' }" class="nav-elements link"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active" :to="{ name: 'about' }" class="nav-elements link"
            >About</RouterLink
          >
        </li>
        <div class="branding">SIGLA</div>
        <li>
          <RouterLink active-class="active" :to="{ name: 'products' }" class="nav-elements link"
            >Products</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active" :to="{ name: 'contact' }" class="nav-elements link"
            >Contact</RouterLink
          >
        </li>
        <div class="nav-elements cart">Cart</div>
      </ul>
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-bars" size="lg" />
        </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <RouterLink active-class="active" :to="{ name: 'home' }" class="nav-elements link"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'about' }" class="nav-elements link"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'products' }" class="nav-elements link"
              >Products</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'contact' }" class="nav-elements link"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </transition>
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
  name: 'navbar',
  components: {
    Home,
    Products,
    About,
    Contact
  }, 
  data(){
    return {
      scrollPosition: null, 
      mobile: false, 
      mobileNav: null,
      windowWidth: null
    }
  }
}
</script>
<style lang="scss">
@import '../styles/Navbar.scss';
</style>
