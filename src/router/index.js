import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login.vue'
import test from '@/components/test.vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

Vue.use(Router)
const childRender = (resolve) => {
    require(['@/components/childRender.vue'], resolve)
};
const userName = (resolve) => {
    require(['@/components/username.vue'], resolve)
};
const myWorld = (resolve) => {
    require(['@/components/MyWorld.vue'], resolve)
};
const chart = (resolve) => {
    require(['@/components/chart.vue'], resolve)
};
const learnjs = (resolve) => {
    require(['@/components/learnjs.vue'], resolve)
};
export default new Router({
    // mode:'history',
    routes: [
    {
        path: '/',
        component: login,
    },
    {
        path: '/test',
        component: test,
        children: [
            {
                path: 'childrender',
                name: 'childrender',
                component: childRender
            }, 
            {
                path: 'username',
                name: 'username',
                component: userName,
            },

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
        component: login,
        // redirect: '/test'
    },
    {
        path: '/myWorld',
        component:myWorld,
        name:'myWorld'
    },
    {
        path: '/chart',
        component:chart,
        name:'chart'
    },
    {
        path: '/learnjs',
        component:learnjs,
        name:'learnjs'
    }

    ]
})