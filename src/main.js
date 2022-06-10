import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';  //引入Element ui
import { Message } from 'element-ui'
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';

import {postKeyValueRequest} from "./utils/api";
import {postPicRequest} from "./utils/api";
import {postRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";


import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 使用 mavonEditor
Vue.use(mavonEditor)

Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.postPicRequest = postPicRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;


Vue.config.productionTip = false
Vue.prototype.axios = axios;
axios.defaults.baseURL = "http://124.221.244.201:8082"
axios.defaults.withCredentials = true
Vue.use(axios);
Vue.use(ElementUI); //使用 ElementUI


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
