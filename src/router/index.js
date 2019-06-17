import VueRouter from 'vue-router'
import Vue from 'vue'
import jsTransfer from '../components/jsonTransferTest.vue'
import jsTree from '../views/recursive.vue'

// 测试vue是否可以像react那样  支持声明式写法
import declarative from '../views/declarative.vue'

Vue.use(VueRouter)

const routes = [
  {
    // 首页
    path: '/jsTree',
    name: 'jsTree',
    component: jsTree,
  },
  {
    path: '/jsTransfer',
    name: 'jsTransfer',
    component: jsTransfer,
  },
  {
    path: '/declarative',
    name: 'declarative',
    component: declarative,
  },
]

const router = new VueRouter({
  routes
})

export default router
