// para criar uma função devemos usar a 'function'
//       nome       parametros
function presente (dinheiro,valor){
    if(dinheiro < valor){
        return 'Não vai dar para comprar'
    } else {
        return 'Você realmente precisa disso?'
    }

}
// para a função funcionar precisamos colocar ela em uma variável
let x = presente (50,90)
console.log(x)