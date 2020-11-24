<template>
  <h3>{{ msg }} {{ setMyValue() }}</h3>
  <div>idemploye:&nbsp;{{ idemploye }}</div>
  <div>my_obj:&nbsp;{{ my_obj }}</div>
  <div>title:&nbsp;{{ title }}</div>
  <div>{{ `x: ${pos.x}, y: ${pos.y}` }}</div>
</template>

<script>
import { ref, reactive, onMounted, watchEffect } from 'vue'

function useMousePosition() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  // ...
  return pos
}

export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: 0,
      required: true
    },
    msg: {
      type: String,
      default: '',
      required: false
    },
    id: {
      type: Number,
      default: 0,
      required: false
    }
  },
  setup(props) {
    const pos = useMousePosition()
    const title = ref('Merci patron')
    const idemploye = ref(0)
    const my_id = ref(999)
    const my_obj = reactive({
      firstname: 'Maurice',
      lastname: 'Pittet',
      idemploye: 10958
    })

    setTimeout(() => {
      title.value = "THIS IS A NEW TITLE"
      my_obj.idemploye = props.modelValue
      pos.x = 100
      pos.y = 200
    }, 5000);

    watchEffect(() => {
      console.log('msg is: ', props.msg)
    })

    watchEffect(() => {
      console.log('id: ', props.id)
    })

    function setVal () {

      return my_id.value + 1
    }

     onMounted(() => {
      idemploye.value = props.modelValue
      my_obj.idemploye = props.modelValue
    })

    return {
      pos,
      title,
      idemploye,
      my_id,
      my_obj,
      setMyValue: setVal,
    }
  }
}
</script>

<style>

</style>
