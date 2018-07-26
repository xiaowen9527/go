// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入vant
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant)

//引入lazyload懒加载组件
import { Lazyload } from 'vant';
Vue.use(Lazyload)

//vue-awesome-swiper图片滑动组件
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
