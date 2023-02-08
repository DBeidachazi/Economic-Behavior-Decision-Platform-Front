import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import store from "@/store";
// import axios from "axios";
// import VueAxios from "vue-axios";
createApp(App).use(router).use(store).mount('#app')
