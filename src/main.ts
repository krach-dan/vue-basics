import './assets/main.css'

import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import App from './App.vue'
import Box from './components/Box.vue'

const app = createApp(App)

app.component("Box", Box)

app.mount('#app')


