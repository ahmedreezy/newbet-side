import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import { getApiBaseUrl } from './utils/apiBase'
import { getToken } from './utils/userAuth'

axios.defaults.baseURL = getApiBaseUrl()
axios.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

createApp(App).use(router).mount('#app')
