import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/admin/login',
    component: AdminLogin,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('adminToken')) {
        next('/admin/dashboard')
      } else {
        next()
      }
    }
  },
  {
    path: '/admin/dashboard',
    component: AdminDashboard,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('adminToken')) {
        next()
      } else {
        next('/admin/login')
      }
    }
  },
  {
    path: '/admin',
    redirect: '/admin/login'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
