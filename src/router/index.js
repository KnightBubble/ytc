import Vue from 'vue'
import Router from 'vue-router'
// import Index from '../pages/index.vue';
// import Dynamic from '../pages/dynamic.vue'
Vue.use(Router)

const Index = resolve => require(['../pages/index.vue'], resolve);
const Dynamic = resolve => require(['../pages/dynamic.vue'], resolve);

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  },{
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/dynamic',
    name: 'Dynamic',
    component: Dynamic
  }]
})
