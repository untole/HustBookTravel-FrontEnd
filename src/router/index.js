import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '@/components/views/HomePage'

export default new Router({
    routes: [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    }]
})