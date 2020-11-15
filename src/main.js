import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/home/home.vue'
import Detail from './components/detail/detail.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/detail/:id', name: 'detail', component: Detail, props: true }
  ]
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')

Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
      value = value.substring(0, (limit - 3)) + '...';
  }
  return value
})
