// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import Vueresource from 'vue-resource'
import echarts from 'echarts'
import axios from 'axios'
var qiniu = require('qiniu-js')

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.use(Vueresource);
Vue.use(qiniu);

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});