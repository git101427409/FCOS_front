<template>
  <div class="home">
    <Slideshow></Slideshow>
    <img alt="FCOS logo" src="../assets/logo.svg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slideshow from '@/components/Slideshow.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Slideshow
  }
}
</script>
