<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <employe v-model="idemploye"  :msg="msg"></employe>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Employe from './components/Employe.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Employe
  },
  data: () => ({
    idemploye: 666,
    msg: 'toto'
  }),
  mounted () {
    setTimeout(() => {
      this.msg = 'tutu'
    }, 10000)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
