import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/ComponentSectionBanner'
import News from './../components/ComponentSectionNews'

Vue.use(VueRouter)

export default new VueRouter ({ 
    linkExactActiveClass: 'link-active',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/news',
            component: News
        }
    ]
})