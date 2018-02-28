import Vue from 'vue'
import Vuex from 'vuex'
// import cart from './cart'
import products from './modules/products'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        // cart,
        products
    }
})
