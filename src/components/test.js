import { defineCustomElement } from 'vue'
import Test from './Test.ce.vue'

const TestElement = defineCustomElement(Test)

customElements.define('my-test', TestElement)
