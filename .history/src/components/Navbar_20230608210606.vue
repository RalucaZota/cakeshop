<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav >
      <div class="cart">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" fade size="xl" />
        </div>
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
        <div class="branding">
          <img src="../assets/images/logo.png" alt="logo"/>
        </div>
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
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-bars" size="lg" @click="openMobileNav" v-show="!mobileNav && mobile"  class="burger" :class="{'icon-active': mobileNav}"/>
          <font-awesome-icon  v-show="mobileNav" icon="fa-solid fa-xmark" beat size="xl" @click="closeMobileNav" class="close-nav" :class="{'icon-active': mobileNav}"/>
        </div>

      <transition name="mobile-nav">
        
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <div class="branding">
          <img src="../assets/images/logo.png" alt="logo"/>
        </div>
          </li>
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
  <div class="div"></div>
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
      scrolledNav: null, 
      mobile: null, 
      mobileNav: null,
      windowWidth: null,

    }
  },
  created(){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen()
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll)
  },
  methods:{
    openMobileNav(){
      this.mobileNav = true
   
     
    },
    closeMobileNav(){
      this.mobileNav = false

    },

    updateScroll(){
      const scrollPosition =  window.scrollY;
      if (scrollPosition > 50){
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false
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
