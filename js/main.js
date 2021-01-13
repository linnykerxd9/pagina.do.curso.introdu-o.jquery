
$(function(){
	$(".divInformacoes").hide();
	$(".barra-de-progresso").hide();
});
function consultaCep(){
	var cep = document.getElementById("cep").value;
	$.ajax({
		url:"https://viacep.com.br/ws/"+cep+"/json/",
		type:"GET",
		success:function(response){
			$(".barra-de-progresso").show();
			setTimeout(function(){
			$(".barra-de-progresso").hide();
			$("#titulo_Cep").html("CEP "+response.cep);
			$("#mostrarLogradouro").html(response.logradouro);
			$("#mostrarComplemento").html(response.complemento);
			$("#mostrarBairro").html(response.bairro);
			$("#mostrarLocalidade").html(response.localidade);
			$("#mostrarUf").html(response.uf);
			$("#mostrarIbge").html(response.ibge);
			$("#mostrarGia").html(response.gia);
			$("#mostrarDDD").html(response.ddd);
			$("#mostrarSiafi").html(response.siafi);
			$(".divInformacoes").show();
			},1000);
		}
	})
}



