import {createLocalVue,mount} from '@vue/test-utils';
import LoginForm from '../../form/LoginForm.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'


describe("LoginForm.vue",()=>{
    const localVue = createLocalVue()
     let vuetify
     beforeEach(() => {
        vuetify = new Vuetify()
      })

      it('컴포넌트 테스트',()=>{
      const wrapper=  mount(LoginForm,{
      localVue,
      vuetify,
      data(){
        return{
            email:'a@a.com',
            password:'123!'
        }
    }
  })
  // expect(wrapper.html()).toMatchSnapshot()

  // expect(wrapper.html()).toMatchSnapshot()
    // testbtn
    // Wrapper { selector: '.v-card__text.test .ttt' } 

    // console.log(wrapper.find('.test'),'이메일 확인좀')
    console.log(wrapper.classes(),'이메일 확인좀')
    // console.log(wrapper,'이메일 확인좀')
    // expect(title.exists()).toBe(true);
    // expect(wrapper.classes('ttt')).toBe(true)
    // expect(title.text()).toBe('Foobar')
    })
})
