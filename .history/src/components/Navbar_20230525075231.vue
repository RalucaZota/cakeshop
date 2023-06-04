<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
                <router-link to="/">Products</router-link>
                <router-link to="/">About</router-link>
                <router-link to="/">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data(){
        
    }
}
</script>