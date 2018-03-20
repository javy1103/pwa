// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Datepicker from '@/common/Datepicker'
import CustomSelect from '@/common/CustomSelect'
import CustomInput from '@/common/CustomInput'
import Tabs from '@/common/Tabs.vue'
import '@/assets/js/fontawesome-all'

Vue.component('datepicker', Datepicker)
Vue.component('customSelect', CustomSelect)
Vue.component('tabs', Tabs)
Vue.component('customInput', CustomInput)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
