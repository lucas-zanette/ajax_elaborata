//não precisa fazer o document $(document) porque já está implícito que é para pegar o document inteiro
//   $ é um apelido para jquery
$(function () {
    //comentado o evento click para executar todo este codigo a hora que abrir a pagina - igual ao load do genexus
    // esta maneira (fildset + button) foi um CSS Selector Reference
    //$("fieldset + button").click(function() {
    //jQuery.getJSON( url [, data ] [, success ] )

    //vamos usar um site externo para testar porque o interno deu erro
    //jQuery.get( url [, data ] [, success ] [, dataType ] )
    //$.get("https://www.w3schools.com");

    //site interno deu erro
    //http://localhost:8000/clientes.html
    //iniciado o php como seguinte comando: php -S 0.0.0.0:8000 -t .
    //chamada conhecida como callback - assincrona - que espera algum retorno
    $.getJSON("/lista_clientes.json", function (valores) {

        /*
        for(var i=0; i < valores.length; i++){
        
            var tr =     '<tr>'
                            +'<td>'+ valores[i].nome +'</td>'
                            +'<td>'+ valores[i].email +'</td>'
                            +'<td>'+ valores[i].cep +'</td>'
                            +'<td>'+ valores[i].dataNasc +'</td>'
                        +'</tr>';

            $("tbody").append(tr);
        }
        */
        $('tbody').empty();
        valores.forEach(function (val, idx) {
            console.log(val, idx);
            var tr = '<tr>'
                + '<td>' + val.nome + '</td>'
                + '<td>' + val.email + '</td>'
                + '<td>' + val.cep + '</td>'
                + '<td>' + val.dataNasc + '</td>'
                + '</tr>';

            $("tbody").append(tr);
        });
    });

    $("fieldset button").click(function () {
        var nome = $("input[name=nome]").val();
        var email = $("input[name=email]").val();
        var cep = $("input[name=cep]").val();
        var dataNasc = $("input[name=data_nasc]").val();

        var tr = '<tr>'
            + '<td>' + nome + '</td>'
            + '<td>' + email + '</td>'
            + '<td>' + cep + '</td>'
            + '<td>' + dataNasc + '</td>'
            + '</tr>';

        var tr2 = $(tr).hide().fadeIn(2000);

        $("tbody").append(tr2);
    });

    $("input[name=cep]").keydown(function (ev) {
        console.log(ev);
        //bloqueia as letras e permite somente numeros
        if ((ev.keyCode>=48 && ev.keyCode<=57) || ev.keyCode == 8) {
            return true;            
        } else {
            return false;
        }

    });

    $("input[name=data_nasc]").datepicker({
        dateFormat: "dd/mm/yy"

    });

    $("input[name=email]").blur(function() {
        var valor = $(this).val();

        var regex = /^[a-zA-z0-9\.\-_]*@[a-z0-9]*\.[a-z\.]*$/gm;
        if ( regex.test(valor) == false ) {
            alert("email inválido!");
        }
        
        
    });    
});