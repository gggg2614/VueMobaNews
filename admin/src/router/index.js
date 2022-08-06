import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import CategoryEdit from '@/views/CategoryEdit.vue'
import ItemEdit from '@/views/ItemEdit.vue'

Vue.use(VueRouter)

const routes = [
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

    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
