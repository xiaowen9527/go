import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

//(app.js)超过1m之后使用异步组件拆分

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/pages/home/Home')
    },{
      path:'/city',
      name:"City",
      component:()=> import('@/pages/city/City')
    },{
      path:'/detail/:id',
      name:"Detail",
      component:()=> import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
