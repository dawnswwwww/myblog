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
    meta: {
      keepAlive: true // 需要被缓存的组件
    }
  },
  {
    path: '/detail/:id',
    name: 'viewDetail',
    component: () => import(/* webpackChunkName: "viewDetail" */ '../views/viewDetail.vue'),

  },
  {
    path: '/skeleton',
    name: 'skeleton',
    component: () => import(/* webpackChunkName: "viewDetail" */ '../views/Skeleton.vue'),

  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '/NewArticle',
        name: 'NewArticle',
        component: () => import(/* webpackChunkName: "NewArticle" */ '../views/NewArticle.vue'),
      },
      {
        path: '/Manage',
        name: 'Manage',
        component: () => import(/* webpackChunkName: "Manage" */ '../views/Manage.vue'),
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue'),
      },
      {
        path: '/about',
        name: 'About',
        // component: About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
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
