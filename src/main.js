import { createApp, VueElement } from 'vue'
import {initializeApp} from 'firebase/app'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import axios from 'axios'


// Vue.prototype.axios =axios

const firebaseConfig = {
    apiKey: "AIzaSyDx8JG2rxuyzI5UiC74ZxeuwYAv-u2foRM",
    authDomain: "vue-firebase-1778a.firebaseapp.com",
    projectId: "vue-firebase-1778a",
    storageBucket: "vue-firebase-1778a.appspot.com",
    messagingSenderId: "183317343351",
    appId: "1:183317343351:web:6486419c3f2a8148ab2a72"
  };

  const app = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')

export default app