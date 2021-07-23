<template>
  <v-app>
    <v-main>
      <employe v-if="isDisplayed" v-model="idemploye"  :msg="msg" :id="id"></employe><br>
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'
import Employe from './components/Employe.vue'

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Employe
  },
  /*
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
  },
  */
  setup() {
    const idemploye = ref(10958)
    const msg = ref('toto')
    const id = ref(6)
    const isDisplayed = ref(true)

    const showComponent = () => {
      this.isDisplayed = !this.isDisplayed
    }

    onMounted(() => {
      setTimeout(() => {
        msg.value = 'tutu'
        id.value = 10958
      }, 10000)
    })

    return {
      idemploye,
      msg,
      id,
      isDisplayed,
      showComponent
    }
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
