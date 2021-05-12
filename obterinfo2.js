function obterinfo2(){
    if(typeof(Storage) !== "undefined"){
        if(localStorage.cont2){
            localStorage.cont2 = Number(localStorage.cont2)+1;
        } else {
            localStorage.cont2 = 1;
        }
        filme = {
            "codigo": document.getElementById("cod").value,
            "nome": document.getElementById("nomeFilme").value,
            "ano": document.getElementById("lanç").value,
            "diretor": document.getElementById("diretor").value,
            "atores": document.getElementById("atores").value
        }
        strfilme = JSON.stringify(filme);
        localStorage.setItem("filme_"+localStorage.cont2, strfilme);
        console.log(strfilme)
    } else {

    }
}