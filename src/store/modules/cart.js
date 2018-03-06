import shops from '../shops'
//state
const state = {
    products: []
}
//getters
const getters = {
    cartProducts: (state) => {
        console.log(state.products);
        return state.products;
    },
    cartProductsQuantity: (state) => {
        let quantity = 0;
        for (const item of state.products) {
            console.log(item);
            if (item.hasOwnProperty('quantity')) {
                quantity += item.quantity;
            }
        }
        return quantity;
    }
}
//actions
const actions = {
    addProductToCart({ state, commit }, item) {
        commit('pushCartProducts', item);
        // commit('decreaseProductsQuantity', item);
    },
    //设置商品数量
    setCartProductsQuantity({ state, commit }, payload) {
        commit('setCartProductsQuantity', payload);
    },
    //删除商品
    removeProductFromCart({ state, commit }, item) {
        commit('removeCartProducts', item)
    }
}
//mutatuins
const mutations = {
    // setCartProducts(state,{items}){
    //     state.products = i
    // }
    //addCartProducts
    pushCartProducts(state, item) {
        //商品是否已经添加
        //同一种商品
        let temp = state.products.find(el => el.item.id == item.id);
        // 同一种样式
        if (temp) {
            let cartItem = state.products.find(el => el.item.style.id == item.style.id)
            if (cartItem) {
                cartItem.quantity++;
            } else {
                let index = state.products.findIndex(el => el.item.id == item.id)
                // state.products.push({ item: item, quantity: 1 });
                state.products.splice(index, 0, { item: item, quantity: 1 })
            }
        } else {
            state.products.push({ item: item, quantity: 1 });
        }


    },
    setCartProductsQuantity(state, payload) {
        let item = payload.item, quantity = payload.quantity;
        let cartItem = state.products.find(el => el.item.style.id == item.style.id)
        if (cartItem) {
            cartItem.quantity = payload.quantity;
        } else {
            console.error('Cannot find this item: ' + item.name);
        }
    },
    //removeCartProducts//删除商品
    removeCartProducts(state, item) {
        let index = state.products.find((ele, index) => {
            if (ele.id == item.id) {
                return index;
            }
        })
        state.products.splice(index, 1);
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}