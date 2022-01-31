import { createRouter, createWebHashHistory } from 'vue-router'

import AllAgentsView from './views/AllAgentsView.vue'
import AgentView from './views/AgentView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: AllAgentsView,
      path: '/'
    },
    {
      component: AgentView,
      path: '/:uuid'
    }
  ]
})
