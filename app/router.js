import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import page2 from './components/page2.vue';
import page3 from './components/page3.vue';
import page4 from './components/page4.vue';
import page5 from './components/page5.vue';
import page6 from './components/page6.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2,
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3,
    },
    {
      path: '/page4',
      name: 'page4',
      component: page4,
    },
    {
      path: '/page5',
      name: 'page5',
      component: page5,
    },
    {
      path: '/page6',
      name: 'page6',
      component: page6,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
