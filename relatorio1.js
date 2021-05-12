function relatorio1(){
    var tipoRel = document.getElementById("tipoRel").value;
    var capacRel = document.getElementById("capRel").value;
    for(let i=1;i<=localStorage.cont;i++){
        var salaObtido = localStorage.getItem("sala_"+i);
        var vetorsala = JSON.parse(salaObtido);
        if(tipoRel==vetorsala.tipo){
            if(capacRel<vetorsala.cap){
                console.log(vetorsala);
                console.log(tipoRel);
                console.log(capacRel);
                document.getElementById("mostrarRel1").innerHTML = "Código: " + vetorsala.codigo + "; Nome: " + vetorsala.nome + "; Capacidade: " + vetorsala.cap + "; Tipo: " + vetorsala.tipo + "; Acessibilidade: " +  vetorsala.acces;
                alert("Código: " + vetorsala.codigo + '\n' + "Nome: " + vetorsala.nome + '\n' + "Capacidade: " + vetorsala.cap + '\n' + "Tipo: " + vetorsala.tipo + '\n' + "Acessibilidade: " +  vetorsala.acces);
            }
        }    
    }
}