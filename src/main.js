import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui'
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '../static/css/reset.css'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
