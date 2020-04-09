import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

Vue.config.productionTip = false

//Bootstrap
Vue.use(BootstrapVue, IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/custom.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
