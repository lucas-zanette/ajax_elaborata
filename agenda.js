
function gravar() {
    var div = document.getElementById("msg-erro");
    div.style.display = "none";

    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var lista = document.getElementById("lista");

    if ( nome.value == "" || nome.value.length < 10 ) {
        exibiErro("Nome é obrigatório");
        nome.focus();
        return; //early return // retorna o valor e não vai pra frente evita de fazer um if muito grande em todos os campos de validação 
    }

    var regex = /^\([0-9]+\)[0-9]{4}\-[0-9]{4}$/gm;
    if (regex.exec(telefone.value) == null) {
        exibiErro("Telefone é obrigatório");
        telefone.focus();
        return; //early return // retorna o valor e não vai pra frente evita de fazer um if muito grande em todos os campos de validação 
    }
    if (email.value == "") {
        exibiErro("E-mail é obrigatório");
        email.focus();
        return; //early return // retorna o valor e não vai pra frente evita de fazer um if muito grande em todos os campos de validação 
    }

    var novo = '<tr>'
        + '<td>' + nome.value + '</td>'
        + '<td>' + telefone.value + '</td>'
        + '<td>' + email.value + '</td>'
    '</tr>'
    lista.innerHTML += novo;
}

pegar();

function pegar() {
    /*
    var dados = [
        {
            nome: "Edir",
            telefone: "12345-1234",
            email: "eu@eu.com"
        },
        {
            nome: "Jose",
            telefone: "12345-1234",
            email: "jose@eu.com"
        },
    ]
    
    var lista = document.getElementById('lista');
    for (var i = 0; i < dados.length; i++) {

        var novo = '<tr>'
            + '<td>' + dados[i].nome + '</td>'
            + '<td>' + dados[i].telefone + '</td>'
            + '<td>' + dados[i].email + '</td>'
        '</tr>'
        lista.innerHTML += novo;
    }
    */
}

function exibiErro(msg) {
    var div = document.getElementById("msg-erro");
    div.innerHTML = msg;
    div.style.display = "block";
}