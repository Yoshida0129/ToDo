import Vue from 'vue'
import Router from 'vue-router'
import todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'todo',
      component: todo
    }
  ]
})
