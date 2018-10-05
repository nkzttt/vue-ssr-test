import Vue from 'vue';
import Router from 'vue-router';
import Top from './components/Top.vue';
import Page from './components/Page.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Top },
  { path: '/page', component: Page }
];

const createRouter = () => {
  return new Router({
    mode: 'history',
    routes
  });
};

export default createRouter;