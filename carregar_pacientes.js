var botao_busca = document.querySelector("#buscar-paciente");
botao_busca.addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	var erro_status = document.querySelector("#erro-ajax");
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){
		if(xhr.status == 200){
			erro_status.classList.add("invisivel");
			var pacientes = JSON.parse(xhr.responseText);
			pacientes.forEach( function(paciente){
				adicionarPacientesNaTabela(paciente);
			});
		}else{
			erro_status.classList.remove("invisivel");
			console.log(xhr.responseText);
		}
	});
	xhr.send();
});


