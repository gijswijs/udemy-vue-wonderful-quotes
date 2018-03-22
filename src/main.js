import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  el: '#app',
  render: h => h(App)
})

Vue.use(VueResource);
