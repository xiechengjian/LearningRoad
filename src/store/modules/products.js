import shops from '../shops'
import $ from 'jQuery'
const state = {
    products: [],
}
// getters
const getters = {
    allProducts: (state) => {
        return state.products;
    },
    productById: (state) => (id) => {
        return state.products.find(element => element.id === id)
    }
    // productsById:(state, id) {
    //     state.all.forEach(element => {
    //         if (element.hasOwnProperty('id') && element['id'] == id) {
    //             return element;
    //         }
    //     });

    // }
}
//action
const actions = {
    getAllProducts({ commit }) {
        // console.log(shops);
        shops.getProducts((products) => {
            commit('setProducts', products);
        })
    },
    changeProductActiveUrl(state, id, url) {
        commit('setProducts', products);
    }
}

//mutation
const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setProductActiveUrl(state, payload) {
        console.log(payload);
        // state.
        // let element = state.products.find(element => element.id === id);
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}