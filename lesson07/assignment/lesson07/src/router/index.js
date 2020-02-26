import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Images from '@/components/Images'
import Grid from '@/components/Grid'
import Accordion from '@/components/Accordion'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Images',
      component: Images
    },
    {
      path: '/',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/',
      name: 'Accordion',
      component: Accordion
    }
  ]
})





