import Vue from 'vue'
import Router from 'vue-router'
import newForm from '@/components/new/main'
import preview from '@/components/preview/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'newForm',
      component:  newForm
    },{
      path: '/preview',
      name: 'preview',
      component:  preview
    }
  ]
})
