import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import swiper module styles
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
import '@/assets/scss/style.scss'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
