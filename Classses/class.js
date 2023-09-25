 //classes são agrupamentos de objetos que tem as mesmas caracteristicas
 
 
 const jogador  = function(nome, posicao ,numGol){
    nome = nome, 
    posicao = posicao,
    Gols = numGol
    
    this.getNome= function(){
        return nome;
    }
    this.getPos = function(){
        return posicao;
    
    }
    this.getGol = function(){
        return Gols;
    }
 }

 const neymar = new jogador("Neymar", "Atacante", 1000)
 console.log(neymar.getGol())
 const renato = new jogador("Renato augosto", "Meio campo", 80)
 console.log(renato.getPos())

 //essa é a forma antigo de criar classes
 //criavamos funçóes para forçar a criação de classes