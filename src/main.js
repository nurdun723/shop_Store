// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
//导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//导入MUI
import './lib/css/mui.min.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
Vue.use(MintUI)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
