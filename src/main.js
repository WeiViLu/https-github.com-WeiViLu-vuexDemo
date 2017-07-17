// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iview from 'iview'
import  router from './router/index'
import 'iview/dist/styles/iview.css'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(iview);
Vue.use(Vuex);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h =>h(App),
  template: '<App/>',
  components: { App }
})
