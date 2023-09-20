let num = [1,2,3]

//isso é o que a gente chama de um array, arrays começam a contagem do 0. então o num [1] na verdade é o numero 2
//é um jeito simples de guardar os dados.
//mas e se precisarmos de algo mais completo?

let amigo = {
    nome:'josé',
    sexo:'M',
    Peso:'85.4',
    numGol:76,
    Gol(g=0){
        console.log(`josé fez gol!`)
        this.numGol += g
        //this faz referencia ao proprio objeto, nesse caso esse this faz referencia ao 'amigo'
    }
}

//dessa forma temos um objeto que pode ter a complexidade que precisarmos para o programa
//no objetos precisamos separar os valores por uma virgula

console.log(amigo)
// isso vai mostrar todas as informações no objeto mas também podemos   pegar uma informação especifica da seguinte maneira
console.log(amigo.nome)
console.log(amigo.numGol)
// se chamarmos a função vamos ver que a função vai dar erraado
//Gol(2)  //comente esse linha pro código funcionar
console.log(amigo.numGol)
//deu erro porque a função existe somente dentro do objeto amigo, então precisamos chamar indicar o objeto antes de chamar a funçáo da seguinte forma
amigo.Gol(2)
console.log(amigo.numGol)

//também podemos modificar o objeto
//vamos adicionar uma variavel ao objeto da seguinte forma
amigo.estado = 'Casado'
console.log(amigo)
// agora o nosso amigo é casado

//assim como podemos adicionar, também podemos deletar informações do objeto
delete amigo.Peso
console.log(amigo)