new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
       exibirAlerta(){
            alert('Estou alertando !')
       },
       armazenaValor(event){
            this.valor = event.target.value
       }
     }
})