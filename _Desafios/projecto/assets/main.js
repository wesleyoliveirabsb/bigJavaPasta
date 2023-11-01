const livros = [];

function checkKeyboardCode(){
    document.addEventListener('keydown',(event) => {
        var name = event.key;
        var code = event.code;
        //alertar o nome e código da key no keydown
        alert (`Tecla pressionada ${name} \r \n Key code: ${code}`);   
    },false);
}
//também é uma function só que escrita de forma diferente isso é chamado de arrow function
addKeyboardEventListeners = () =>{
    //para usar o addEventListener nos primeiro precisamos informar qual o evento que estamos procurando e também rpecisamos criar uma função
    // o que fica mais fácil quando usamos a arrow function
    document.addEventListener(`keydown`,(event)=>{
    var livro1=document.getElementById("book1");
    var livro2=document.getElementById("book2");
    var livro3 = document.getElementById("book3");
    var livro4 = document.getElementById("book4");

        var code = event.code;
        if (code == 'Digit1'){
            livro1.classList.toggle("cardHighlight");
            livro2.classList.remove("cardHighlight");
            livro3.classList.remove("cardHighlight");
            livro4.classList.remove("cardHighlight");
        }

        if (code == 'Digit2'){
            livro1.classList.remove("cardHighlight");
            livro2.classList.toggle("cardHighlight");
            livro3.classList.remove("cardHighlight");
            livro4.classList.remove("cardHighlight");
        }

        if (code == 'Digit3'){
            livro1.classList.remove("cardHighlight");
            livro2.classList.remove("cardHighlight");
            livro3.classList.toggle("cardHighlight");
            livro4.classList.remove("cardHighlight");
        }

        if (code == 'Digit4'){
            livro1.classList.remove("cardHighlight");
            livro2.classList.remove("cardHighlight");
            livro3.classList.remove("cardHighlight");
            livro4.classList.toggle("cardHighlight");
        }


},false);
}

 selectCard = (selector) =>{
    var element = document.querySelector(selector);
    element.classList.toggle("cardSelected");
    if (livros.includes(selector)) livros.pop(selector);
    else livros.push(selector);

}

 showSelectedBooks = () =>{
    if (livros.length > 0) alert ("livros selecionados:" +livros)
}

addKeyboardEventListeners();