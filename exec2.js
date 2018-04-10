
function pesquisar() {
    var texto = document.getElementById("texto");
    var palavra = document.getElementById("palavra");

    console.log(texto, palavra);
        
    var novoTexto = '<span class="selecionado">' + palavra.value + '</span>';

    var atualizado = texto.innerHTML.replace(palavra.value, novoTexto);
    texto.innerHTML = atualizado;
}

var painel;
function ligar(){
    painel = setInterval(rodaTexto, 200);
}

function desligar(){
    clearInterval(painel);

}

function rodaTexto() {
    var letreiro = document.getElementById("letreiro");
    var texto    = letreiro.innerHTML;

    var novo  = texto.substr(1) + texto.charAt(0);

    letreiro.innerHTML = novo;
}

