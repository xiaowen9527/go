// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import "babel-polyfill"//防止某些手机白屏

fastClick.attach(document.body)

import "styles/reset.css"
import "styles/border.css"
import "styles/iconfont.css"

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import store from "./store";


Vue.use(VueAwesomeSwiper)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
