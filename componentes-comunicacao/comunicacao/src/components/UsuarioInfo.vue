<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario : <strong>{{nome}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props : {
        nome: String
    },
    methods: {
        reiniciarNome (){
            this.nome = 'Pedro'
            this.$emit('nomeMudou',this.nome)
        }
    }

    
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
