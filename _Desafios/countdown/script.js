const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "31 july 2025"

function countdown(){
     const dataLancamento = new Date(lancamento)
     // esse formato vai transformar a string que colocamos na variável de lancamento em uma nova data e ela vai ficar guardada em dataLancamento

    const hoje = new Date()
    //pega a data atual

    const segundosTotal = (dataLancamento - hoje)/1000;
    // dividimos por 1000 para transformar milisegundos em segundos
    //vamos usar os segundos para a base de contagem
    const finalDias = Math.floor(segundosTotal/ 60 / 60/ 24);
    //calculando os dias
    const finalHoras = Math.floor(segundosTotal/60/60)%24;
    // o % é um modulo vai pegar o resto que sobrou
    //calculando as horas
    const finalMinutos = Math.floor(segundosTotal/60)%60;
    //calculando minutos
    const finalSegundos = Math.floor(segundosTotal)%60;

    dia.innerHTML = finalDias
    hora.innerHTML = finalHoras
    minuto.innerHTML = finalMinutos
    segundo.innerHTML = finalSegundos
    }
    function formatoTempo (tempo){
        return tempo < 10? `0${tempo}` : tempo;
        //função if else simplificada 
        //o ? significa if do lado dele tem o que vai ser mandado se a condição for verdadeira
        // o : significa else do lado dele é o retorno se a função for falsa
    }
    //chamando a função
    countdown();
    //atualizando a pagina para mostrear as mudanças acontecendo sempre que a countdown atualiza
    setInterval(countdown,1000)

    
