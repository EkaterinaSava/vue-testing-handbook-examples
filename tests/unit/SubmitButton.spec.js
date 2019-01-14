import { shallowMount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton.vue'

describe('SubmitButton.vue', () => {
  it('displays a non autorized message', () => {
    const msg = 'submit'
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg: msg
      }
    })

    console.log(wrapper.html())

    expect(wrapper.find('span').text()).toBe('Not Authorized')
    expect(wrapper.find('button').text()).toBe('submit')
  })
})
