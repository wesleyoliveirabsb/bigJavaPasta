const bolsa = ['Notebook','Moleton','Celular','Carregador','Dinheiro']
//[] indica que estamos trabalhando com um array
console.log(bolsa)
//isso vai mostrar tudo que tem dentro do array
//mas como isso se torna uma estrtutura de repetição?
//vamos supor que eu quero achar o carregador no meio desse array
for(let i = 0; i <= bolsa.length;i++){
    console.log(bolsa[i])
    if(bolsa[i]== 'Carregador') break
}
//i++ significa a mesma coisa que i = i + 1
//começa do 0 porque o array sempre começa do 0
//bolsa.lengt significa que vai ser o tamanho da bolsa
