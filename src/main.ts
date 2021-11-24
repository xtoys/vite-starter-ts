import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import '@/assets/styles/tailwind.css'
import router from '@/router'
import App from '@/App.vue'

createApp(App).use(router).mount('#app')
