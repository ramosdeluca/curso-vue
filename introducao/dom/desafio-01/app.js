    new Vue ({
        el: '#desafio',
        data: {
            nome: 'Rogerio',
            idade: 47,
            numRandom: 0,
            link: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg'

        },
        methods: {
            numero(min,max){
                this.numRandom = Math.random() * (max - min) + min
                return this.numRandom
            }

        }
    })  
