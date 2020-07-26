var btn_adc = document.querySelector("#adicionar-paciente");
btn_adc.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#formAdc");

	var paciente = dadosPaciente(form);
	
	adicionarPacientesNaTabela(paciente);

	form.reset();
});

function adicionarPacientesNaTabela(paciente){
	var pacienteTr = criaTr(paciente);
	var erros = validaPaciente(paciente);
	if(erros.length > 0){
		exibeMensagem(erros);
	}else{
		var tabela = document.querySelector("#tabela-pacientes");
		tabela.appendChild(pacienteTr);
	}
}

function dadosPaciente(form){
	var paciente = {
		nome :form.nome.value,
		peso :form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc : calculaImc(form.peso.value, form.altura.value)
	}
	return paciente;
};

function criaTr(paciente){

	var trTabela = document.createElement("tr");
	trTabela.classList.add("paciente");

	tdNomeTabela = document.createElement("td");
	tdNomeTabela.classList.add("info-nome");

	tdPesoTabela = document.createElement("td");
	tdPesoTabela.classList.add("info-peso");

	tdAlturaTabela = document.createElement("td");
	tdAlturaTabela.classList.add("info-altura");

	tdGorduraTabela = document.createElement("td");
	tdGorduraTabela.classList.add("info-gordura");

	tdImcTabela = document.createElement("td");
	tdImcTabela.classList.add("info-imc");

	tdNomeTabela.textContent = paciente.nome;
	tdPesoTabela.textContent = paciente.peso;
	tdAlturaTabela.textContent = paciente.altura;
	tdGorduraTabela.textContent = paciente.gordura;
	tdImcTabela.textContent = paciente.imc;

	trTabela.appendChild(tdNomeTabela);
	trTabela.appendChild(tdPesoTabela);
	trTabela.appendChild(tdAlturaTabela);
	trTabela.appendChild(tdGorduraTabela);
	trTabela.appendChild(tdImcTabela);

	return trTabela;
};

function validaPaciente(paciente){
	var form = document.querySelector("#formAdc");
	var erros = [];

	if(paciente.nome.length == 0){
		form.nome.focus();
	 	erros.push("Nome inválido");
	}

	if(!validarPeso(paciente.peso) || paciente.peso.length == 0){
		form.peso.focus();
	 	erros.push("Peso inválido");
	}

	if(!validarAltura(paciente.altura) || paciente.altura.length == 0){
		form.altura.focus();
		erros.push("Altura inválida");
	 }


	if(paciente.gordura.length == 0){
		form.gordura.focus();
	 	erros.push("gordura inválida");
	}

	 return erros;
};

function exibeMensagem(erros){
	var ul = document.querySelector("#lista-erros");
		ul.innerHTML = "";

		erros.forEach(function(erro){
			var li = document.createElement("li");
			li.classList.add("erro");
			li.textContent = erro;
			ul.appendChild(li);
		});
};