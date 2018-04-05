
var nome = "Lucas";		//String
var idade = 23; 		//int   -> Number
var peso = 43.9; 		//float -> Number
var acordado = true;	//bool


if (acordado == true) {
	console.log("sim");
} else {
	console.log("nao");
}


function imprimirNome() {
	var input = document.getElementById("nome");
	var h2    = document.getElementById("exibir");
	h2.innerHTML = input.value.toUpperCase();		//element.innerHTML	Sets or returns the content of an element
}

function primeiraLetra() {
	var input = document.getElementById("nome");
	var h2    = document.getElementById("exibir");
	h2.innerHTML  = input.value.substr(0,1).toUpperCase();
	h2.innerHTML += input.value.substr(1,100).toLowerCase();
	

}
