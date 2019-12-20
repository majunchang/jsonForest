import VueRouter from 'vue-router'
import Vue from 'vue'
import jsTransfer from '../components/jsonTransferTest.vue'
import jsTree from '../views/recursive.vue'

// 测试vue是否可以像react那样  支持声明式写法
import declarative from '../views/declarative.vue'
// tab栏 移动端固定定位
import stickyPosition from '../views/stickyPosition.vue'
// 无线滚动列表
import infiniteScroll from '../views/infiniteScroll.vue'

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
  {
    path: '/stickyPosition',
    name: 'stickyPosition',
    component: stickyPosition,
  },
  {
    path: '/infiniteScroll',
    name: 'infiniteScroll',
    component: infiniteScroll
  }
]

const router = new VueRouter({
  routes
})

export default router
