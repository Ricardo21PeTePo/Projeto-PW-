function obterinfo3(){
    if(typeof(Storage) !== "undefined"){
        if(localStorage.cont3){
            localStorage.cont3 = Number(localStorage.cont3)+1;
        } else {
            localStorage.cont3 = 1;
        }
        sessao = {
            "codigof": document.getElementById("codF").value,
            "codigos": document.getElementById("codS").value,
            "data": document.getElementById("data").value,
            "hora": document.getElementById("hora").value,
            "preço": document.getElementById("preço").value
        }
        strsessao = JSON.stringify(sessao);
        localStorage.setItem("sessao_"+localStorage.cont3, strsessao);
        console.log(strsessao)
    } else {

    }
}