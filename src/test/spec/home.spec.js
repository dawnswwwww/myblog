import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/views/Home'

describe('<Home>', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('.menuContanier').text())
    .toEqual('menu test')
})