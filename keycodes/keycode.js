//eventos em keydown
document.addEventListener('keydown',(event) => {
    var name = event.key;
    var code = event.code;
    //alertar o nome e código da key no keydown
    alert (`key pressed ${name} /r /n Key code value: ${code}`);   
},false)