import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Table,TableColumn,InputNumber,Button } from "element-ui";

//挂载axios在vue原型上，可以直接用this调用
Vue.prototype.$http = axios;

Vue.config.productionTip = false
Vue.use(Table )
Vue.use(TableColumn)
Vue.use(InputNumber).use(Button)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
