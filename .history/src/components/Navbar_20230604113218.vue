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
      </ul>
        <div class="icon">
          <font-awesome-icon icon="fa-solid fa-bars" size="lg" @click="showIcon"  class="burger" :class="{'icon-active': mobileNav}"/>
          <font-awesome-icon  v-show="mobileNav" icon="fa-solid fa-xmark"  @click="closeMobileNav" size="xl" />
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
      scrolledNav: null, 
      mobile: null, 
      mobileNav: null,
      windowWidth: null,
      showIcon: null
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
    showIcon(){
      if (this.mobile === true) {
        this.showIcon = true
        return;
      }
      else(!mobileNav)
      {
        this.showIcon = false
        return;
      }
    },
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
