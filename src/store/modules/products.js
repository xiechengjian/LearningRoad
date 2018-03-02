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
    },
    productByStyle: (state, getters) => (style) => {
        // let list = getters.productById(style.id).list;
        // function fun(el, index) {
        //     console.log(index);
        //     let a = (el.color == style.color && el.storage == style.storage);
        //     return a;
        // }
        // console.log(list.find(el => { return (el.color == style.color && el.storage == style.storage) }));
        // console.log(list.find(el => { return (el.color == style.color && el.storage == style.storage) }));
        return getters.productById(style.id).list.find(el => { return (el.color == style.color && el.storage == style.storage) });
    },
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
        let element = state.products.find(element => element.id === payload.id);
        // console.log(element);
        element.activeStyleUrl = payload.url;
    },
    setProductPrice(state, payload) {
        let element = state.products.find(element => element.id === payload.id);
        // console.log(element);
        element.price = payload.price;
    },
    //decreaseProductsQuantity 减少商品的数量
    decreaseProductsQuantity(state, payload) {
        let item = payload.item, quantity = payload.quantity;
        // let element = getters.productByStyle(item.style);
        let style = item.style;
        let product = state.products.find(element => element.id === item.id);
        // console.log(product, style);
        let element = product.list.find(el => { return (el.color == style.color && el.storage == style.storage) });
        // let element = getters.productById(item.id).list.find(el => { return (el.color == style.color && el.storage == style.storage) });
        element.inventory -= quantity;
    },
    //增加商品的数量
    increaseProductsQuantity(state, payload) {
        let item = payload.item, quantity = payload.quantity;
        let style = item.style;
        let product = state.products.find(element => element.id === item.id);
        // console.log(product, style);
        let element = product.list.find(el => { return (el.color == style.color && el.storage == style.storage) });
        element.inventory += quantity;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}