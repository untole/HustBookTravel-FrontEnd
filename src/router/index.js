import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import HomePage from '@/components/views/HomePage'
import Leftbar from '@/components/views/Leftbar'

export default new Router({
    routes: [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path:'/test1',
        name:'test1',
        component:Leftbar
    }
       
]
})