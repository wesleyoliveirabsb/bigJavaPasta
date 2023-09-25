class jogador {
    constructor(nome, posicao, numGol){
        this.nome = nome,
        this.posicao = posicao,
        this.numGol = numGol
    }
    golsMarcados(){
        console.log(`O ${this.nome} ja marcou ${this.numGol} gols em sua carreira`)
    }
}

const neymar = new jogador("Neymar" , "Atacante" ,500)
neymar.golsMarcados()
const pele = new jogador ("Pelé","Atacante", 1000)
pele.golsMarcados()
//classes são funções construtoras de objetos
console.log(typeof jogador)