import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Home from './components/Home';

const app = createApp(App)
app.use(router).mount('#app');
// app.component('HomeComp', Home) // this is global register, can be used anywhere.