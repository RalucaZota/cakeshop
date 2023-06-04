<template>
  <nav>
    <div class="nav-routes">
      <RouterLink active-class="active" class="nav-elements" to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about" class="nav-elements">About</RouterLink>
      <div>SIGLA</div>
      <RouterLink active-class="active" to="/products" class="nav-elements">Products</RouterLink>
      <RouterLink active-class="active" to="/contact" class="nav-elements">Contact</RouterLink>
      <div class="nav-elements">Cart</div>
    </div>
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
<style lang="scss">
@import '../styles/Navbar.scss'

</style>