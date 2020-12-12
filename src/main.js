import Vue from 'vue'
import App from './App.vue'
import router from './router'
import global_ from './components/Global.js'

Object.defineProperty(Vue.prototype, 'GLOBAL', {
  get() {
    return global_
  },
  // writable: false
})
// 改用defineProperty寫法
// Vue.prototype.GLOBAL = global_
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
