import Vue from 'vue'
import Router from 'vue-router'
import Inbox from './views/Inbox.vue'
import Starred from './views/Starred.vue'
import Trash from './views/Trash.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inbox',
      component: Inbox,
    },
    {
      path: '/starred',
      name: 'starred',
      component: Starred,
    },
    {
      path: '/trash',
      name: 'trash',
      component: Trash,
    },
  ]
})
