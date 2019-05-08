import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index/index.vue'
import NewList from '../page/NewList/NewList.vue'
import NewInfo from '../page/NewInfo/NewInfo.vue'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/index',
            component:Index
        },
        {
            path:'/newinfo',
            component:NewInfo
        },
        {
            path:'/newlist',
            component:NewList
        },
        {
            path:'/',
            redirect:'/index'
        },
    ]
})
