<template>
      <img class="index-img" :src="index" alt="">
</template>

<script>
import index from '@/assets/images/index.jpg'
export default {
  name: 'home',
  data () {
    return {
      index
    }
  }
}
</script>

<style>
.index-img{
    height: 100%;
    width: 100%;
}
</style>
