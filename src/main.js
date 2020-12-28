import { Button, Form, FormItem, Input } from 'element-ui'
import Vue from 'vue'
import VueParticles from 'vue-particles'
import App from './App.vue'
import router from './router'

Vue.use(VueParticles)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
