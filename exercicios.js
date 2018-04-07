function somar() {
	validarCampos();
	display.innerHTML = parseFloat(n1.value) + parseFloat(n2.value);
	/*
	if (n1.value.search(",") >= 0) {
		alert("número inválido!");
	}else{
		display.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)		
	}
	*/
}

function subtrair() {
	validarCampos();
	display.innerHTML = parseFloat(n1.value) - parseFloat(n2.value);
}

function multiplicar() {
	validarCampos();
	display.innerHTML = parseFloat(n1.value) * parseFloat(n2.value);
}

function dividir() {
	validarCampos();
	display.innerHTML = parseFloat(n1.value) / parseFloat(n2.value);
}

function reverso() {	
	var texto = document.getElementById("texto");
	var resultado = document.getElementById("resultado");

	console.log(texto, resultado);
	for (var ini = texto.value.length-1; ini >= 0; ini--) {
		resultado.innerHTML += texto.value.charAt(ini);		
	}
}

function contarPalavras() {
	var textoCompleto = document.getElementById("valores");
	var palavras = texto.split("");
	alert("O texto contém: " + palavras + " palavras.");
}


function validarCampos() {
	var n1 = document.getElementById("n1");
	var n2 = document.getElementById("n2");
	var display = document.getElementById("display");

    var er = /[^0-9.]/;
    er.lastIndex = 0;

    var campo = n1;
    if (er.test(campo.value)) {
      campo.value = "";
      alert("número incorreto, digite somente números separados por ponto");	
    }
    var campo = n2;
    if (er.test(campo.value)) {
      campo.value = "";
      alert("número incorreto, digite somente números separados por ponto");	
    }
}