function adicionarTabela3(numero, codigof, codigos, data, hora, preço){
    var tb = document.getElementById("tbSessao4");
    var qtdLinhas = tb.rows.lenght;
    var linhatab = tb.insertRow(qtdLinhas);

    var cellNumero = linhatab.insertCell(0)
    var cellCodigoF = linhatab.insertCell(1);
    var cellCodigoS = linhatab.insertCell(2);
    var cellData = linhatab.insertCell(3);
    var cellHora = linhatab.insertCell(4);
    var cellPreço = linhatab.insertCell(5);

    cellNumero.innerHTML = numero;
    cellCodigoF.innerHTML = codigof;
    cellCodigoS.innerHTML = codigos;
    cellData.innerHTML = data;
    cellHora.innerHTML = hora;
    cellPreço.innerHTML = preço;
    console.log(cellNumero)
}
function carregarinfo3(){
    for(let i=1;i<=localStorage.cont3;i++){
        var sessaoObtido = localStorage.getItem("sessao_"+i);
        var vetorsessao = JSON.parse(sessaoObtido);
        adicionarTabela3(i, vetorsessao.codigof, vetorsessao.codigos, vetorsessao.data, vetorsessao.hora, vetorsessao.preço);
        
    }
}