import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import fastClick from "fastclick"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont/iconfont.css'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
