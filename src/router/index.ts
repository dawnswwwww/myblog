import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
// import Home from '../views/Home.vue';
import Welcome from '../views/Welcome.vue'
import NewArticle from '../views/NewArticle.vue'
import Manage from '../views/Manage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import View from '../views/View.vue'
import Home from '../views/Home.vue'
// import Detail from '../views/viewDetail.vue'

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'View',
    component: View,
  },
  {
    path: '/detail/:id',
    name: 'viewDetail',
    component: () => import(
      /* webpackChunkName: "viewDetail" */
      '../views/viewDetail.vue'),

  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/NewArticle',
        name: 'NewArticle',
        component: NewArticle,
      },
      {
        path: '/Manage',
        name: 'Manage',
        component: Manage,
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
      },
      {
        path: '/about',
        name: 'About',
        component: About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      }
    ]
  }
  // {
  //   path: '/view',
  //   name: 'View',
  //   component: View
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
