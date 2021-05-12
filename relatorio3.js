function relatorio3(){
    var dataMin = document.getElementById("dataMin").value;
    var dataMax = document.getElementById("dataMax").value;
    for(let i=1;i<=localStorage.cont3;i++){
        var sessaoObtido = localStorage.getItem("sessao_"+i);
        var vetorsessao = JSON.parse(sessaoObtido);
        if(dataMin<=vetorsessao.data){
            if(dataMax>=vetorsessao.data){
                console.log(vetorsessao);
                console.log(dataMin);
                console.log(dataMax);
                document.getElementById("mostrarRel3").innerHTML = "Código do filme: " + vetorsessao.codigof + "; Código da sala" + vetorsessao.codigos + "; Data: " + vetorsessao.data + "; Horario: " + vetorsessao.hora + "; Preço do ingresso: " + vetorsessao.preço;
                alert("Código do filme: " + vetorsessao.codigof + '\n' + "Código da sala: " + vetorsessao.codigos + '\n' + "Data: " + vetorsessao.data + '\n' +  "Horario: " + vetorsessao.hora + '\n' + "Preço do ingresso: " + vetorsessao.preço);
            }
        }
    }
}