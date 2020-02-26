import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Images = { template: '<div>images</div>' }
const Grid = { template: '<div>grid</div>' }
const Accordion = { template: '<div>accordion</div>' }

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




