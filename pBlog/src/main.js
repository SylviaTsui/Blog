// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import Time from '../static/libs/time.js'


Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
Vue.prototype.$time = Time;

/* eslint-disable no-new */
new Vue({
  el: '#app', //index.html
  router,
  components: { App },  //App.vue
  template: '<App/>' //App.vue放进index.html
})
