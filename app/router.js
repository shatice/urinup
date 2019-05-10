import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';

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
      path: '/accessories',
      name: 'accessories',
      component: accessories,
    },
    {
      path: '/start',
      name: 'start',
      component: start,
    },
    {
      path: '/walk',
      name: 'walk',
      component: walk,
    },
    {
      path: '/run',
      name: 'run',
      component: run,
    },
    {
      path: '/docks',
      name: 'docks',
      component: docks,
    },
    {
      path: '/sewage',
      name: 'sewage',
      component: sewage,
    },
    {
      path: '/subway',
      name: 'subway',
      component: subway,
    },
    {
      path: '/chatelet',
      name: 'chatelet',
      component: chatelet,
    },
    {
      path: '/wagon',
      name: 'wagon',
      component: wagon,
    },
    {
      path: '/seine',
      name: 'seine',
      component: seine,
    },
    {
      path: '/catacombs',
      name: 'catacombs',
      component: catacombs,
    },
    {
      path: '/denfert',
      name: 'denfert',
      component: denfert,
    },
    {
      path: '/station',
      name: 'station',
      component: station,
    },
    {
      path: '/right',
      name: 'right',
      component: right,
    },
    {
      path: '/left',
      name: 'left',
      component: left,
    },
    {
      path: '/change',
      name: 'change',
      component: change,
    },
    {
      path: '/republique',
      name: 'republique',
      component: republique,
    },
    {
      path: '/avoid',
      name: 'avoid',
      component: avoid,
    },
    {
      path: '/surf',
      name: 'surf',
      component: surf,
    },
    {
      path: '/taxi',
      name: 'taxi',
      component: taxi,
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: traffic,
    },
    {
      path: '/broke',
      name: 'broke',
      component: broke,
    },
    {
      path: '/truck',
      name: 'truck',
      component: truck,
    },
    {
      path: '/lose',
      name: 'lose',
      component: lose,
    },
    {
      path: '/win',
      name: 'win',
      component: win,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
