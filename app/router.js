import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import accessories from './components/accessories.vue';
import start from './components/start.vue';
import walk from './components/walk.vue';
import catacombs from './components/catacombs.vue';
import change from './components/change.vue';
import chatelet from './components/chatelet.vue';
import docks from './components/docks.vue';
import lose from './components/lose.vue';
import republique from './components/republique.vue';
import right from './components/right.vue';
import seine from './components/seine.vue';
import sewage from './components/sewage.vue';
import station from './components/station.vue';
import subway from './components/subway.vue';
import surf from './components/surf.vue';
import taxi from './components/taxi.vue';
import wagon from './components/wagon.vue';
import win from './components/win.vue';
import scooter from './components/scooter.vue';
import denfert from './components/denfert.vue';


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
      path: '/scooter',
      name: 'scooter',
      component: scooter,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
