import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import aboutPage from '../views/aboutPage.vue'
import searchPage from '../views/searchPage.vue'

const routes = [
   {
      path: '/',
      component: HomePage
   },
   {
      path: '/aboutPage',
      component: aboutPage
   },

{
   path: '/searchPage',
    component: searchPage
   },
{
      path: '/searchPage',
       component: searchPage
}
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router