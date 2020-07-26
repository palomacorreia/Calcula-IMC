//IMC dos pacientes da tabela
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var pesoValido = validarPeso(peso);

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var alturaValida = validarAltura(altura);

	if(!pesoValido){
		console.log("ah");
		tdPeso.textContent = "Peso inválido";
		pesoValido = false;
		paciente.style.backgroundColor="lightcoral";
	}

	if(!alturaValida){
		tdAltura.textContent = "Altura inválida";
		alturaValida = false;
		paciente.style.backgroundColor="lightcoral";
	}

	if(pesoValido && alturaValida){
		var tdImc  =  paciente.querySelector(".info-imc");
		var imc = peso / (altura * altura);	
		tdImc.textContent = imc.toFixed(2);
	}else{
		var tdImc  =  paciente.querySelector(".info-imc");
		tdImc.textContent = "Imc inválido";
	}
}

function validarPeso(peso){
	if(peso > 0 && peso < 610 ){
		return true;
	}else{
		return false;
	}
};

function validarAltura(altura){
	if(altura > 0 && altura < 3.00 ){
		return true;
	}else{
		return false;
	}
};

function calculaImc(peso, altura){
	var pesoValido = false;
	var alturaValida = false;
	if(peso > 0 && peso <= 610){
		 pesoValido = true;
	}

	if(altura > 0 && altura < 3.00){
		alturaValida =  true;
	}

	if(peso && altura){
		var calImc = peso / (altura * altura);
		return calImc.toFixed(2);
	}
};