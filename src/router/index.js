import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/HelloWorld.vue')
  }
]

var router = new VueRouter({
  routes
})
export default router