// 创建一个路由器并暴露出去
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import detail from '../components/detail.vue'
// 创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/props',
      name: 'Props',
      component: () => import('../views/01_props/Father.vue')
    }, {
      path: '/customEvent',
      name: 'CustomEvent',
      component: () => import('../views/02_custom-event/Father.vue')
    }, {
      path: '/mitt',
      name: 'Mitt',
      component: () => import('../views/03_mitt/Father.vue')
    }, {
      path: '/vModel',
      name: 'VModel',
      component: () => import('../views/04_v-model/Father.vue')
    },{
      path: '/attrs',
      name: 'Attrs',
      component: () => import('../views/05_$attrs/Father.vue')
    }, {
      path: '/refs',
      name: 'refs',
      component: () => import('../views/06_$refs-$parent/Father.vue')
    }, {
      path: '/provideInject',
      name: 'ProvideInject',
      component: () => import('../views/07_provide-inject/Father.vue')
     }, {
      path: '/pinia',
      name: 'Pinia',
      component: () => import('../views/08_pinia/Father.vue')
     }, {
      path: '/slot',
      name: 'Slot',
      component: () => import('../views/09_slot/Father.vue')
    }
  ]
})

export default router