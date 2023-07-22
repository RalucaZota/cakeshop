<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="cart" @click="openModal()" >
        <div @mouseover="hoverBoxShow()" @mouseleave="hoverBoxDisappear()"
       >
          <font-awesome-icon icon="fa-solid fa-cart-shopping" fade size="xl" />

        </div>
        <div v-show="boxhover" :class="{'hidden-box': isOpen}">
          <hover-box />
        
        </div>
    
      <teleport to="body">
        <div class="modal" v-if="isOpen">
        <cart-modal  @close="closeModal()"/>
        <button @click="this.isOpen = false">Close</button> 
      </div>
    </teleport>
  </div>
      <ul class="navigation" v-show="!mobile">
        <li>
          <RouterLink active-class="active" :to="{ name: 'home' }" class="link">Home</RouterLink>
        </li>
        <li>
          <RouterLink active-class="active" :to="{ name: 'about' }" class="link">About</RouterLink>
        </li>
        <div class="branding">
          <img src="../assets/images/logo.png" alt="logo" />
        </div>
        <li>
          <RouterLink active-class="active" :to="{ name: 'products' }" class="link"
            >Products</RouterLink
          >
        </li>
        <li>
          <RouterLink active-class="active" :to="{ name: 'contact' }" class="link"
            >Contact</RouterLink
          >
        </li>
      </ul>
      <div class="icon">
        <font-awesome-icon
          icon="fa-solid fa-bars"
          size="lg"
          @click="openMobileNav"
          v-show="!mobileNav && mobile"
          class="burger"
          :class="{ 'icon-active': mobileNav }"
        />
        <font-awesome-icon
          v-show="mobileNav"
          icon="fa-solid fa-xmark"
          beat
          size="xl"
          @click="closeMobileNav"
          class="close-nav"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>

      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <div class="branding">
              <img src="../assets/images/logo.png" alt="logo" />
            </div>
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'home' }" class="link">Home</RouterLink>
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'about' }" class="link"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'products' }" class="link"
              >Products</RouterLink
            >
          </li>
          <li>
            <RouterLink active-class="active" :to="{ name: 'contact' }" class="link"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>

  <RouterView />
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref, watch, reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { emitter } from '../EmitterEvents';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import CartModal from './CartModal.vue';
import HoverBox from './HoverBox.vue';

const scrolledNav = ref(null);
const mobile = ref(null);
const mobileNav = ref(null);
const windowWidth = ref(null);
const boxhover = ref(false);
const isOpen = ref(false);

const updateScroll = () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    scrolledNav.value = true;
    return;
  }
  scrolledNav.value = false;
};

const checkScreen = () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value <= 750) {
    mobile.value = true;
    return;
  }
  mobile.value = false;
  mobileNav.value = false;
};

const hoverBoxShow = () => {
  boxhover.value = true;
};

const hoverBoxDisappear = () => {
  setTimeout(() => {
    boxhover.value = false;
  }, 2000);
};

const openModal = () => {
  isOpen.value = true;
  boxhover.value = false;
};

const openMobileNav = () => {
  mobileNav.value = true;
};

const closeMobileNav = () => {
  mobileNav.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', updateScroll);
  window.addEventListener('resize', checkScreen);
  checkScreen();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll);
  window.removeEventListener('resize', checkScreen);
});

</script>
<style lang="scss">
@import '../styles/Navbar.scss';
</style>
