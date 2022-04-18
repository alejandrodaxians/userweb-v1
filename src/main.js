import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

new { createApp }({
  router,
  render: h => h(App)
}).$mount('#app')
