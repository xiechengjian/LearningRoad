// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';
import 'iview/dist/styles/iview.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/css/cartTable.css';
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

// function loading(){
//   console.log('loading');
// }
Vue.config.productionTip = false
Vue.use(iView);
Vue.use(Vuex);
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
// var store = new Vuex.Store({
//     state: {
//         //存放组件之间共享的数据
//         storeName: "jjk1",
//         storeAge: 18,
//     },

//     getters: {
//         getAge: (state, getters, rootState) => {
//             console.log(state, getters, rootState);
//             return state.storeAge + 100;
//         }
//     },
//     actions: {
//         incrementAsync({ commit }, payload) {
//             setTimeout(() => {
//                 // console.log(commit);
//                 commit('increment', payload)
//             }, 1000)
//         }
//     },
//     mutations: {
//         //显式的更改state里的数据
//         increment(state, payload) {
//             state.storeAge += payload.amount;
//         }
//     },

// });
import store from './store/index.js'
/* eslint-disable no-new */
var ve = new Vue({
    el: '#app',
    router,
    store,
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    },
    watch: {
        a: function () {
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
