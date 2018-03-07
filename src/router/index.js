import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import test from '@/components/test.vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(Router)
let a = 98
console.log(a)
const childRender = (resolve) => {
    require(['@/components/childRender.vue'], resolve)
}
const userName = (resolve) => {
    require(['@/components/username.vue'], resolve)
}
const myWorld = (resolve) => {
    require(['@/components/MyWorld.vue'], resolve)
}
const chart = (resolve) => {
    require(['@/components/chart.vue'], resolve)
}
const learnjs = (resolve) => {
    require(['@/components/learnjs.vue'], resolve)
}
const fo = (resolve) => {
    require(['@/components/fo.vue'], resolve)
}
const human = (resolve) => {
    require(['@/components/human.vue'], resolve)
}
const shopping = (resolve) => {
    require(['@/components/shopping/shopping.vue'], resolve)
}
const cart = (resolve) => {
    require(['@/components/shopping/cart.vue'], resolve)
}
const goods = (resolve) => {
    require(['@/components/shopping/goods.vue'], resolve)
}
const game = (resolve) => {
    require(['@/components/game/game.vue'], resolve)
}
export default new Router({
    // mode:'history',
    routes: [{
        path: '/test',
        component: test,
        children: [{
            path: 'childrender',
            name: 'childrender',
            component: childRender
        },
        {
            path: 'username',
            name: 'username',
            component: userName
        }

        ]
    },
    {
        //     path: '/test/childrender',
        //     component: childRender
        // },{
        //     path: '/test/username',
        //     component: userName
        // },{
        path: '/login',
        component: login
        // redirect: '/test'
    },
    {
        path: '/myWorld',
        component: myWorld,
        name: 'myWorld'
    },
    {
        path: '/human',
        component: human,
        name: 'human'
    },
    {
        path: '/fo',
        component: fo,
        name: 'fo'
    },
    {
        path: '/',
        component: login,
        name: 'login'
    },
    {
        path: '/chart',
        component: chart,
        name: 'chart'
    },
    {
        path: '/learnjs',
        component: learnjs,
        name: 'learnjs'
    },
    {
        path: '/shopping/:id',
        component: shopping,
        name: 'shopping'
    },
    {
        path: '/cart',
        component: cart,
        name: 'cart'
    },
    {
        path: '/goods',
        component: goods,
        name: 'goods'
    },
    {
        path: '/game',
        component: game,
        name: 'game'
    },

    ]
})
