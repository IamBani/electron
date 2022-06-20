import { createWebHashHistory,RouteRecordRaw,createRouter } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:'/',
    component:()=>import('../components/HelloWorld')
  }, {
    path: '/about',
    name: 'about',
    component:()=>import('../view/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
