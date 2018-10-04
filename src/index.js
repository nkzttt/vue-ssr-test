import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import routes from './routes';

Vue.use(Router);

const router = new Router({ routes });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});