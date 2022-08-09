import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import CategoryEdit from '@/views/CategoryEdit.vue'
import ItemEdit from '@/views/ItemEdit.vue'
import HeroEdit from '@/views/HeroEdit.vue'
import Article from '@/views/ArticleEdit.vue'
import Ads from '@/views/AdsEdit.vue'
import Admin from '@/views/AdminEdit.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login', name: 'login', component: Login, meta: { isPublic: true }

  },
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategoryEdit },
      { path: '/categories/edit/:id', component: () => import('@/views/CategoryEdit'), props: true },
      { path: '/categories/list', component: () => import('@/views/CategoryList') },

      { path: '/items/create', component: ItemEdit },
      { path: '/items/edit/:id', component: () => import('@/views/ItemEdit'), props: true },
      { path: '/items/list', component: () => import('@/views/ItemList') },

      { path: '/heroes/create', component: HeroEdit },
      { path: '/heroes/edit/:id', component: () => import('@/views/HeroEdit'), props: true },
      { path: '/heroes/list', component: () => import('@/views/HeroList') },

      { path: '/articles/create', component: Article },
      { path: '/articles/edit/:id', component: () => import('@/views/ArticleEdit'), props: true },
      { path: '/articles/list', component: () => import('@/views/ArticleList') },

      { path: '/ads/create', component: Ads },
      { path: '/ads/edit/:id', component: () => import('@/views/AdsEdit'), props: true },
      { path: '/ads/list', component: () => import('@/views/AdsList') },

      { path: '/admin_users/create', component: Admin },
      { path: '/admin_users/edit/:id', component: () => import('@/views/AdminEdit'), props: true },
      { path: '/admin_users/list', component: () => import('@/views/AdminList') },
    ]
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})

export default router
