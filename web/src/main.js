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
<<<<<<< HEAD
import '@/assets/iconfont/iconfont.css'

import Card from '@/components/Card.vue'
Vue.component('m-card', Card)

import ListCard from '@/components/ListCard.vue'
Vue.component('m-list-card', ListCard)

=======
>>>>>>> a4e85f63a904e8564fe67a0bb6cc3562f6bfc63b
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
