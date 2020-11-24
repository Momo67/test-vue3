import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  test('renders blank when no props is passed', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.html()).toMatch('')
  })
})
