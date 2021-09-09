<template>
  <h1 @click="onClick">{{ msg }}</h1>
  <slot name="content"></slot>
  <div>
    <v-btn color="success" @click="dispMsg">Cliquer ici</v-btn>
  </div>
</template>

<!--
<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
      required: false
    },
    msg: {
      type: String,
      default: '',
      required: false
    },
  },
  emits: {
    jobclick: null
  },

  setup (props, { emit }) {
    const onClick = () => {
      console.log('Appel de onClick')
      let myobj = {
        nom: 'Pittet',
        prenom: 'Maurice'
      }
      emit('jobclick', myobj)
    }

    const dispMsg = () => {
      alert('Vous avez cliqué sur le bouton vuetify!')
    }

    return {
      onClick,
      dispMsg
    }
  }
}
</script>
-->
<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  id: {
    type: String,
    default: null,
    required: false
  },
  msg: {
    type: String,
    default: '',
    required: false
  }
})

const emit = defineEmits({
    jobclick: null
})

const onClick = () => {
  console.log('Appel de onClick')
  let myobj = {
    nom: 'Pittet',
    prenom: 'Maurice'
  }
  emit('jobclick', myobj)
}

const dispMsg = () => {
  alert('Vous avez cliqué sur le bouton vuetify!')
}
</script>

<style>

</style>