import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import images from '@/components/images'
import grid from '@/components/grid'
import accordion from '@/components/accordion'

Vue.use(VueRouter)

const routes = [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/images',
      name: 'images',
      component: images
    },
    {
      path: '/grid',
      name: 'grid',
      component: grid
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: accordion
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes
  })


export default router





