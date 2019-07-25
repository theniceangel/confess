<template>
  <div id="app" @touchmove.prevent>
    <tree msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Tree from './components/Tree.vue'

export default {
  name: 'app',
  components: {
    Tree
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
</style>
