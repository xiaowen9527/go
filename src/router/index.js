import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { 
      path: '/',
      name: 'shoppingMall',
      component: ShoppingMall
    }
  ]
})
