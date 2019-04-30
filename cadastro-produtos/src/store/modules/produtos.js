export default {
    state: {
        qtdProduto: 0,
        qtdCalorias: 0,
        produtos: []

    },
    mutations: {
        setProdutos(state, prodInit){
              state.produtos = prodInit
        },
        atualizaProdutos(state, produtos){
            state.produtos = produtos
            //console.log("produto: " + state.produtos)
        }   
    },
    actions: {
        initProdutos({commit}, prodInit){
            commit('setProdutos', prodInit)
        },
        atualizaProdutos({commit }, produtos) {
            commit('atualizaProdutos', produtos)
        }
    },
    getters: {
        qtdCalorias(state){
           return state.qtdCalorias 
        },
        produtos(state){
            return state.produtos
        }
    }
    
}
