// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'
import JsonForest from './plugins/jsonTranser'

let jsontransfer = new JsonForest()
console.log(jsontransfer)
Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.jsonTransfer = jsontransfer
Vue.prototype.$events = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  router,
  render: h => h(App),
})
