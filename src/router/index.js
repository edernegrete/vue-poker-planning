import Vue from 'vue';
import Router from 'vue-router';
import Deck from '@/components/Deck';
import SingleCard from '@/components/SingleCard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Deck',
      component: Deck,
    },
    {
      path: '/card/:id',
      name: 'SingleCard',
      component: SingleCard,
      props: true,
    },
  ],
});
