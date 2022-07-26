import { createWebHashHistory,RouteRecordRaw,createRouter } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    redirect:"/music",
    component: () => import('@/components/Layout/index.vue'),
    children: [
      {
        path: 'music',
        name: 'music',
        redirect:'/music/selected',
        component: () => import('@/view/music.vue'),
        children: [{
          path: 'selected',
          name: 'selected',
          component:()=>import('@/view/music/selected.vue')
        }, {
          path: 'audioradio',
          name: 'audioradio',
          component:()=>import('@/view/music/audioradio.vue')
        }]
      }   
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
