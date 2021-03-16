import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue';
import Home from '@/views/Home.vue';
import User from '@/views/User.vue';
// import Page from '@/views/Page.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: Main
  }, {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      SideBar: () => import('@/views/SideBar')
    }
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('@/views/Page.vue')
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    props: (route) => ({
      id: route.params.id,
      title: route.query.title
    })
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('@/views/Notes')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
