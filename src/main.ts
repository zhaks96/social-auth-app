import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGapi from 'vue-gapi'
const app = createApp(App)

app.use(VueGapi, {
  clientId: '633871883161-20tun2rpaf18ok26r0t4n4ape67l3cbn.apps.googleusercontent.com',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  scope: 'https://www.googleapis.com/auth/spreadsheets',
})

app.mount('#app')
