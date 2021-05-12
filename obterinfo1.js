function obterinfo1(){
    if(typeof(Storage) !== "undefined"){
        if(localStorage.cont){
            localStorage.cont = Number(localStorage.cont)+1;
        } else {
            localStorage.cont = 1;
        }
        sala = {
            "codigo": document.getElementById("txtCodigo").value,
            "nome": document.getElementById("txtNome").value,
            "cap": document.getElementById("txtCapacidade").value,
            "tipo": document.getElementById("txtTipo").value,
            "acces": document.getElementById("txtacces").value
        }
        strsala = JSON.stringify(sala);
        localStorage.setItem("sala_"+localStorage.cont, strsala);
        console.log(strsala)
    } else {

    }
}