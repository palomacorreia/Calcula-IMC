var inputNome = document.querySelector("#input-filtro");
inputNome.addEventListener("input", function(){
	
	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0 ){
		for(var i=0; i < pacientes.length; i++){
			var tdNome = pacientes[i].querySelector(".info-nome").textContent;
			var expressaoRegular = new RegExp(this.value, "i");
			if(!expressaoRegular.test(tdNome)){
				pacientes[i].classList.add("invisivel");
			}
			else{
				pacientes[i].classList.remove("invisivel");	
			}
		}
	}else{
		for(var i=0; i < pacientes.length; i++){
			pacientes[i].classList.remove("invisivel");
		}
	}
});
