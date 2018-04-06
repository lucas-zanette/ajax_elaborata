var cidades = [];

function cadastrar() {
	var input = document.getElementById("cidade");
	var total = document.getElementById("total");
	
	//valida se ja existe
	if ( cidades.includes(input.value) ) {
		window.alert("A cidade: " + input.value + " já está cadastrada");	
	} else {	
		cidades.push(input.value);
	}
		

	total.innerHTML = cidades.length;
	listar();
	input.value = "";
}

function ordenar() {
	cidades.sort();
	listar();

}

function listar() {
	var lista = document.getElementById("lista");
	lista.innerHTML = "";
	for ( var i=0; i<=cidades.length-1; i++ ) {
		lista.innerHTML = lista.innerHTML + "<li>" + cidades[i] + "</li>"
	}	
}
