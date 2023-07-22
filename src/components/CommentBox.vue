<template>
    <div> 
        <div class="big-comment-box">
            <div class="little-comment-box"></div>
            <p class="text-comment-box">{{ CommentBox }}</p>
        </div>
        <img src="../assets//images//chefs//chef.png"/>
    </div>

</template>
<script setup>
import { CommentBox } from '../data.js'

</script>
<style scoped>
@import '../styles/AboutPage/CommentBox.scss';
</style>
