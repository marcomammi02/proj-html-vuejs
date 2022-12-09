import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faLocationDot,
  faMagnifyingGlass,
  faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueCarousel from 'vue-carousel';
import App from './App.vue';

library.add(faMagnifyingGlass, faQuoteLeft, faInstagram, faTwitter, faFacebookF, faLocationDot);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
