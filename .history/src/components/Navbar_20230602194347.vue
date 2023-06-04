<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav >
      <ul class="navigation" v-show="!mobile">
        <li>
          <RouterLink active-class="active" :to="{ name: 'home' }" class=" link"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active" :to="{ name: 'about' }" class=" link"
            >About</RouterLink
          >
        </li>
        <div class="branding">SIGLA</div>
        <li>
          <RouterLink active-class="active" :to="{ name: 'products' }" class=" link"
            >Products</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active" :to="{ name: 'contact' }" class=" link"
            >Contact</RouterLink
          >
        </li>
        <div class="nav-elements cart">Cart</div>
      </ul>
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-bars" size="lg" @click="toggleMobileNav" v-show="mobile" class="burger" :class="{'icon-active': mobileNav}"/>
        </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <RouterLink active-class="active" :to="{ name: 'home' }" class="link"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'about' }" class=" link"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'products' }" class=" link"
              >Products</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'contact' }" class=" link"
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
      mobile: null, 
      mobileNav: null,
      windowWidth: null
    }
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen()
  },
  methods:{
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav
    },
    checkScreen(){
      this.windowWidth = window.innerWidth;
      if( this.windowWidth <= 750){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    }
  }
}
</script>
<style lang="scss">
@import '../styles/Navbar.scss';
</style>
