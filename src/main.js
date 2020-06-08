// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "element-ui/lib/theme-chalk/index.css";
import Element from "element-ui";
import JsonForest from "./plugins/jsonTranser";
import vuelazyload from "vue-lazyload";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";

let jsontransfer = new JsonForest();

Vue.use(Element);
Vue.config.productionTip = false;
Vue.prototype.jsonTransfer = jsontransfer;
Vue.prototype.$events = new Vue();
Vue.use(vuelazyload);
/* eslint-disable no-new */
Sentry.init({
  dsn:
    "https://f2cacd6a6d8e4e77897a2fd1e81d5874@o404331.ingest.sentry.io/5267835",
  integrations: [new VueIntegration({ Vue, attachProps: true })]
});
new Vue({
  el: "#app",
  components: {
    App
  },
  router,
  render: h => h(App)
});
