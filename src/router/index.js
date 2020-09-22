import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: () => import('@/views/Main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/home/home')
        },
        {
          path: '/page1',
          name: 'page1',
          component: () => import('@/views/other/page1')
        },
        {
          path: '/page2',
          name: 'page2',
          component: () => import('@/views/other/page2')
        },
        {
          path: '/userManage',
          name: 'userManage',
          component: () => import('@/views/userManage/userManage')
        },
        {
          path: '/videoManage',
          name: 'videoManage',
          component: () => import('@/views/videoManage/videoManage')
        }
      ]
    }
]

const router = new VueRouter({
  routes
})

export default router
