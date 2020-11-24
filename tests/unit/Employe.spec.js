import { shallowMount, mount } from '@vue/test-utils'
import Employe from '@/components/Employe.vue'

describe('Employe.vue', () => {
  let comp
  const modelValue = 666
  const msg = 'toto'

  beforeEach(() => {
    comp =  mount(Employe, {
      propsData: {
        modelValue: modelValue,
        msg: msg
      }
    })
  })

  test('renders blank when no msg props is passed', () => {
    const wrapper = shallowMount(Employe, {
      props: {
        //msg: 'tata'
      }
    })
    expect(wrapper.html()).toEqual(expect.stringMatching(/<h3>\s+\w*<\/h3>[\W\w]*/))
  })

  test('renders idemploye when passed', () => {
    const matcher = new RegExp(`[\\W\\w]*<div>idemploye:&nbsp;${modelValue}<\\/div>[\\W\\w]*`)
    expect(comp.html()).toEqual(expect.stringMatching(matcher))
  })
})
