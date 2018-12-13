/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Detail from "@/pages/Detail.vue"
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});
