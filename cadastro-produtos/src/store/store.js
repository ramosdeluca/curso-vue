import Vue from 'vue'
import Vuex from 'vuex'

import produtos from './modules/produtos'
//import portfolio from './modules/portfolio'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules: {
        produtos
       // portfolio
    }
})
