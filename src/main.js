import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faMagnifyingGlass, faQuoteLeft);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
