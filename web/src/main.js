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
import '@/assets/iconfont/iconfont.css'

import Card from '@/components/Card.vue'
Vue.component('m-card', Card)

import ListCard from '@/components/ListCard.vue'
Vue.component('m-list-card', ListCard)
import axios from 'axios'
Vue.prototype.$http = axios.create({
  // baseURL:process.env.VUE_APP_APIURL || '/web/api'
  baseURL:'http://localhost:3000/web/api',
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
