<template>
  <h3>{{ msg }} {{ id }}</h3>
  <div>idemploye:&nbsp;{{ idemploye }}</div>
  <div>my_obj:&nbsp;{{ my_obj }}</div>
  <div>title:&nbsp;{{ title }}</div>
  <div>{{ `x: ${pos.x}, y: ${pos.y}` }}</div>
  <p>{{ my_id }}</p>
  <div class="jobs" @click="onJobClick">
    <p v-for="job in jobs" :key="job">{{job.id}} - {{job.title}} - {{job.details}}</p>
  </div>
  <p><button @click="changeMyId">Increase my_id</button></p>
  <p>{{ toto }}</p>
  <a :href="`https://golux.lausanne.ch/goeland/employe/employe_data.php?IdEmploye=${my_obj.idemploye}`" target="__blank">Infos employé</a>
  <p><v-btn color="success" @click="incToto">Incrémente toto</v-btn></p>
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
  name: 'Employe',
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
  emits: {
    click: null,
    jobclick: null
  },
  setup(props, { emit }) {
    const pos = useMousePosition()
    const title = ref('Merci patron')
    const idemploye = ref(0)
    const my_id = ref(999)
    const my_obj = reactive({
      firstname: 'Maurice',
      lastname: 'Pittet',
      idemploye: 10958
    })
    const jobs = [
      { title: 'Web Designer', id: 1, details: 'lorem' },
      { title: 'Web Developer', id: 2, details: 'lorem' },
      { title: 'Vue Developer', id: 3, details: 'lorem' }
    ]
    var toto = ref(10)

    setTimeout(() => {
      title.value = "THIS IS A NEW TITLE"
      //my_obj.idemploye = props.modelValue
      pos.x = 100
      pos.y = 200
    }, 5000);

    watchEffect(() => {
      console.log('msg is: ', props.msg)
    })

    watchEffect(() => {
      console.log('id: ', props.id)
    })

    watchEffect(() => {
      console.log('toto: ', toto.value)
      console.log('my_id: ', my_id.value)
    })

    function setVal () {

      return my_id.value + 1
    }

    function changeMyId () {
      my_id.value += 1
    }

    const incToto = () => {
      toto.value += 1
    }

    onMounted(() => {
      idemploye.value = props.modelValue
      my_obj.idemploye = props.modelValue
    })

    const onJobClick = () => {
      console.log('On est dans onJobClick de Employe')
      emit('jobclick', props.id)
    }

    return {
      pos,
      title,
      idemploye,
      my_id,
      my_obj,
      setMyValue: setVal,
      changeMyId,
      jobs,
      incToto, 
      toto,
      onJobClick
    }
  }
}
</script>

<style>
</style>
