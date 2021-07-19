<template>
  <v-app>
    <v-main>
      <employe v-if="isDisplayed" v-model="idemploye"  :msg="msg" :id="id"></employe><br>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Employe from './components/Employe.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Employe
  },
  data: () => ({
    idemploye: 10958,
    msg: 'toto',
    id: 6,
    isDisplayed: true
  }),
  methods: {
    showComponent () {
      this.isDisplayed = !this.isDisplayed
    }
  },
  mounted () {
    setTimeout(() => {
      this.msg = 'tutu'
      this.id = 10958
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
* {
   text-transform: none !important; 
}
</style>
