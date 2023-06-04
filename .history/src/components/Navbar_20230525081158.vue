<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/products">Products</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Home from "../views/Home.vue"
import Products from "../views/Products.vue"
import About from "../views/About.vue"
import Contact from "../views/Contact.vue"
export default {
    components:{
        Home,
        Products,
        About,
        Contact,
    },
  data() {}
}
</script>
