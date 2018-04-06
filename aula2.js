
var cidade = "Curitiba";
var cidades = ["Curitiba", "Pinhais", "Colombo"];
cidades.push("Araucaria");
console.log(cidades);		


var ini = 0;
var ult = cidades.length-1;
while (ini <= ult) {
	console.log(cidades[ini]);
	ini++;
}

//crescente
var ult = cidades.length -1;
for ( var ini=0; ini<=ult; ini++) {
	console.log(cidades[ini]);
}

//crescente
var ult = 0;

for ( var ini=cidades.length-1; ini>=ult; ini--) {
	console.log(cidades[ini]);
}
