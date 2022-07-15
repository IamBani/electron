import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import "@/assets/css/index.css"
import 'virtual:svg-icons-register'
const pinia = createPinia()
let app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
