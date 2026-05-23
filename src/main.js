import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import { getApiBaseUrl } from './utils/apiBase'

axios.defaults.baseURL = getApiBaseUrl()

createApp(App).use(router).mount('#app')
