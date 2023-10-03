const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "31 july 2024"

function countdown(){
     const dataLancamento = new Date(lancamento)

    const hoje = new Date()

    const segundosTotal = (dataLancamento - hoje)/1000;

    const finalDias = Math.floor(segundosTotal/ 60 / 60/ 24);

    const finalHoras = Math.floor(segundosTotal/60/60)%24;

    const finalMinutos = Math.floor(segundosTotal/60)%60;

    const finalSegundos = Math.floor(segundosTotal)%60;

    dia.innerHTML = finalDias + "D"
    hora.innerHTML = finalHoras + "H"
    minuto.innerHTML = finalMinutos + "M"
    segundo.innerHTML = finalSegundos + "S"
    }
    function formatoTempo (tempo){
        return tempo < 10? `0${tempo}` : tempo;

    }

    countdown();
    setInterval(countdown,1000)

    
