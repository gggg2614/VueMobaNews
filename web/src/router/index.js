import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Hero from '@/views/Hero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
      { path: '/articles/:id', name: 'article', component: () => import('@/views/Article.vue'), props: true },
    ]
  },
  {path:'/heroes/:id',name:'hero',component:Hero,props:true},

]

const router = new VueRouter({
  routes
})

export default router
