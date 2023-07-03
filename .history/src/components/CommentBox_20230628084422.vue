<template>
    <div> 
        <div class="big-comment-box">
            <div class="little-comment-box"></div>
            <p class="text-comment-box">{{ CommentBox }}</p>
        </div>
        <img src="../assets//images//chefs//chef.png"/>
    </div>

</template>
<script>
import { CommentBox } from '../data.js'
export default {
  name: 'comment-box',
  data() {
    return {
      CommentBox: CommentBox
    }
  }
}
</script>
<style scoped>
@import '../styles/CommentBox.scss';
</style>
