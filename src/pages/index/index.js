// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import jquery from 'jquery'
// import jqueryform from 'jquery-form';
Vue.prototype.$ajax = axios

jquery.config = {
  autoInit: true,
  router: false
}
console.log('首页渲染')
