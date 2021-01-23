import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/ComponentSectionBanner'
import News from './../components/ComponentSectionNews'
import Notice from './../components/ComponentSectionNewsNotice'
import Component404 from './../components/Component404'

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
            alias: '/notices',
            component: News
        },
        {
            path: '/news/:idnotice',
            name: 'notice',
            component: Notice,
            /*beforeEnter: (to, from, next) => {
                next()
            }*/
        },
        {
            path: '/admin',
            redirect: '/'
        },
        {
            path: '*',
            component: Component404
        }
    ]
})