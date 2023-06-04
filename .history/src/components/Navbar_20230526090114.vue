<template>
  <nav>
    <div class="nav-routes">
      <RouterLink active-class="active"  to="/">Home</RouterLink>
      <RouterLink active-class="active" to="/about">About</RouterLink>
      <div>SIGLA</div>
      <RouterLink active-class="active" to="/products">Products</RouterLink>
      <RouterLink active-class="active" to="/contact">Contact</RouterLink>

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
<style>
.active{
font-weight: bold;
color: green;
text-decoration: none;
}
.nav-routes{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

</style>