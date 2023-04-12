<template>
  <!-- <h1>single page application</h1> -->

  <!-- <router-view></router-view> -->

  <HeaderSection />
</template>

<script>

import HeaderSection from './components/sections/HeaderSection.vue'
export default {
  name: 'App',
  components: {
    HeaderSection
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
