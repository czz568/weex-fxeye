/*global Vue*/
import Router from 'vue-router'
import Search from '@/components/Search.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Search',
      component: Search
    }
  ]
})
