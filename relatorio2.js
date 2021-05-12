function relatorio2(){
    var anoRel = document.getElementById("anoRel").value;
    var atorRel = document.getElementById("atorRel").value;
    for(let i=1;i<=localStorage.cont2;i++){
        var filmeObtido = localStorage.getItem("filme_"+i);
        var vetorfilme = JSON.parse(filmeObtido);
        if(atorRel==vetorfilme.atores){
            if(anoRel<vetorfilme.ano){
                console.log(vetorfilme);
                console.log(atorRel);
                console.log(anoRel);
                document.getElementById("mostrarRel2").innerHTML = "Código: " + vetorfilme.codigo + "; Nome: " + vetorfilme.nome + "; Data de lançamento: " + vetorfilme.ano + "; Diretor :" + vetorfilme.diretor + "; Atores : " + vetorfilme.atores +  "\n";
                alert("Código: " + vetorfilme.codigo + '\n' + "Nome: " + vetorfilme.nome + '\n' + "Data de lançamento: " + vetorfilme.ano + '\n' + "Diretor: " + vetorfilme.diretor + '\n' + "Atores : " + vetorfilme.atores);
            }
        }
    }
}