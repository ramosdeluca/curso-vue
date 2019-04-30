import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Produtos from './components/produto/Produtos'
import Semanas from './components/semana/Semanas'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/produto', component: Produtos },
        { path: '/semana', component: Semanas },
    ]
})