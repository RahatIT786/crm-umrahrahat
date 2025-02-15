import { createApp } from 'vue'
import './style.css'


import App from './App.vue'
import router  from './router';
import './assets/script/core/bootstrap.min.js'
import './assets/script/core/jquery-3.7.1.min.js'
import './assets/script/core/popper.min.js'
import './assets/script/kaiadmin.js'
import './assets/script/setting-demo.js'
import './assets/script/setting-demo2.js'
// import './assets/script/plugin/jquery-scrollbar/jquery.scrollbar.min.js'
// import './assets/script/plugin/chart.js/chart.min.js'
// import './assets/script/plugin/jquery.sparkline/jquery.sparkline.min.js'
// import './assets/script/plugin/bootstrap-notify/bootstrap-notify.min.js'



// createApp(App).mount('#app')

const app =createApp(App);

app.use(router);
app.mount("#app");
