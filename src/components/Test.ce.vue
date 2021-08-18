<template>
  <h1 @click="onClick">{{ msg }}</h1>
</template>

<script>
export default {
  props: {
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
      emit('jobclick', { detail: myobj})
    }

    return {
      onClick
    }
  }
}
</script>

<style>

</style>