import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import plugins from './plugins'

Vue.use(plugins)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // render: (h) => h(App),
  render: (h: (arg0: typeof App) => any) => h(App),
}).$mount('#app');
