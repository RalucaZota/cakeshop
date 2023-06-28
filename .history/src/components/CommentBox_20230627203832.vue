<template>
  <div class="big-comment-box">
    <p>{{ CommentBox }}</p>
    <div class="little-comment-box"></div>
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
