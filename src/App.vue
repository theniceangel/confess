<template>
  <div id="app" @touchmove.prevent>
    <tree/>
    <sun/>
    <avocado v-show="showAvocado"/>
  </div>
</template>

<script>
import Tree from './components/Tree.vue'
import Sun from './components/Sun'
import Avocado from './components/Avocado'
import { setTimeout } from 'timers';

export default {
  name: 'app',
  data () {
    return {
      showAvocado: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.showAvocado = !this.showAvocado
    }, 7000)
  },
  components: {
    Tree,
    Sun,
    Avocado
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
