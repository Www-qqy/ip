import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import echarts from '../node_modules/echarts'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
