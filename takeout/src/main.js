// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
/*
import VueRouter from './router';
*/
import VueRouter from 'vue-router';
/*
import VueAxios from 'axios';
*/
import VueResource from 'vue-resource';
import goods from 'components/goods/goods.vue';
import seller from 'components/seller/seller.vue';
import ratings from 'components/ratings/ratings.vue';

import 'common/less/index.less';

Vue.use(VueRouter);
Vue.use(VueResource);
/*
Vue.use(VueAxios);
*/

const routes = [
  {path: '/goods', component: goods},
  {path: '/seller', component: seller},
  {path: '/ratings', component: ratings}
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  /*
  template: '<App/>',
  components: { App },
  */
  render: h => h(App),
  router
}).$mount('#app');
router.push('/goods');

/* eslint-disable no-new */
/*
 new Vue({
 el: '#app',
 router,
 template: '<App/>',
 components: { App }
 });
 */
