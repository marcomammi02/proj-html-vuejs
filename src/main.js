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
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faUser,
  faCalendar,
  faClock,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueCarousel from 'vue-carousel';
import App from './App.vue';

library.add(
  faMagnifyingGlass,
  faQuoteLeft,
  faInstagram,
  faTwitter,
  faFacebookF,
  faLocationDot,
  faUser,
  faCalendar,
  faClock,
  faLinkedinIn,
);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(VueCarousel);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
