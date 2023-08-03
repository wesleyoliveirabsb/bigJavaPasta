
//condicionais podem ser criadas da seguinte forma

//if(condição)
//se condição for verdadeira executa essa parte
//else
//se a condição for falsa executa essa parte

var dinheiro = 70
//estabelecer a quantidade de dinheiro
console.log( `eu possuo ${dinheiro} .reais`)
//usar `` ao inves de '' para escrever uma string permite que tomemos vantagem dos template literals    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
if (dinheiro > 50){
    console.log('comprei o presente!')
}else{
    console.log('não comprei o presente')
}