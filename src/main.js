import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Table, TableColumn, InputNumber, Button } from "element-ui";

//挂载axios在vue原型上，可以直接用this调用
Vue.prototype.$http = axios;

//使用路由守卫做一次登入
router.beforeEach((to, from, next) => {
  console.log(to);
  if(to.path === '/notes'){
    //判断是否有用户
    if(localStorage.getItem('user')){
      //可以放行
      next();
    }else{
      //没有登入的话，就进入登入页面
      next('/login')
    }
  }
  next();
})
Vue.config.productionTip = false
Vue.use(InputNumber).use(Button).use(TableColumn).use(Table)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
