function tabuada(){
    var numero = window.document.getElementById('numero')
    var end = window.document.getElementById('end')
    //quando utilizamos o getElementById ele pega o valor e transforma em uma string, então precisamos transforma essa string em um valor numérico
    var n = Number(numero.value)
    var e = Number(end.value)
    var r = ''
    var i = 0 
    var res = window.document.getElementById('tabuada')
    r = n * e
    // res.innerHTML=` A resposta é: ${r}` o teste deu certo mas precisamos de uma estrutura de repetição se isso realmente for uma tabuada
    res.innerHTML= `A tabuada do ${n} é: <br>`
    do{
        r = n*i
        res.innerHTML += `${n} X ${i} = ${r} <br>`
        //+= significa que ele vai adicionar items ao html ao invez de trocar 
        i++
    }while(i <= e)
}