function mostraI() {
	if (document.getElementById("radio1").checked == true){
		document.getElementById("label").style.display = "block";
		document.getElementById("label1").style.display = "none";
		document.getElementById("label2").style.display = "none";
	} else {
		document.getElementById("label").style.display = "none";
	}
}

function mostraR() {
	if (document.getElementById("radio2").checked == true){
		document.getElementById("label1").style.display = "block";
		document.getElementById("label").style.display = "none";
		document.getElementById("label2").style.display = "none";
	} else {
		document.getElementById("label1").style.display = "none";
	}
}
	
function mostraC() {
	if (document.getElementById("radio3").checked == true){
		document.getElementById("label2").style.display = "block";					
		document.getElementById("label1").style.display = "none";
		document.getElementById("label").style.display = "none";
	} else {
		document.getElementById("label2").style.display = "none";
	}
}
				
function calcularImc(){
	var num1 = document.getElementById("peso").value;
	var num2 = document.getElementById("alt").value;
	var imc = (parseFloat(num1)/(parseFloat(num2)*(parseFloat(num2))));
	alert("IMC: " + imc);
}

function calcularRetangulo(){
	var num3 = document.getElementById("base").value;
	var num4 = document.getElementById("alt1").value;
	var area = (parseFloat(num3))*(parseFloat(num4));
	alert("Área do Retângulo: " + area);
}		
				
function calcularCirculo(){
	var num5 = document.getElementById("raio").value;
	var areaCirc = Math.PI*(parseFloat(num5)*parseFloat(num5));
	alert("Área do Círculo: " + areaCirc);
}

