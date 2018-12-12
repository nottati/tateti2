import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Tateti from '@/views/Tateti.vue'
import Ranking from '@/views/Ranking.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio,
    
    },
    {
      path: '/tateti',
      name: 'Tateti',
      component: Tateti,
     
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking 
    }
    
  ]
})
