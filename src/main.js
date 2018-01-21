// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'iview/dist/styles/iview.css';
// import './assets/bootstrap/js/bootstrap.min';
// import './assets/bootstrap/css/bootstrap.min.css';
// import './assets/bootstrap/css/bootstrap.min.css';
// import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
// import './assets/css/bootstrap.min.css'  
// import './assets/js/bootstrap.min.js'
// import './bootstrap/css/bootstrap.min.css'
// import './assets/css/bootstrap.min.css'; 
// import './assets/js/bootstrap.min.js' 
// import './bootstrap/js/bootstrap.min.js'
// import './bootstrap/css/bootstrap.min.css' 
// window.addEventListener('load',loading);
console.log(11111111111);

// function loading(){
//   console.log('loading');
// }
Vue.config.productionTip = false
Vue.use(iView);
/* eslint-disable no-new */
var ve = new Vue({
  el: '#app',
  router,
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  },
  watch: {
    a: function() {
      // console.log("new a :"+this.a);
    }
  },
  render: p => p(App),
  components: {
    App
  }
})
// console.log(ve.$children[0].$children[0]);
// ve.$data.a = 100;

