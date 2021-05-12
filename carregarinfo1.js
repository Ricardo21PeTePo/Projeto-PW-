function adicionarTabela(numero, codigo, nome, capacidade, tipo, acessivel){
    var tb = document.getElementById("tbCinema4");
    var qtdLinhas = tb.rows.lenght;
    var linhatab = tb.insertRow(qtdLinhas);

    var cellNumero = linhatab.insertCell(0)
    var cellCodigo = linhatab.insertCell(1);
    var cellNome = linhatab.insertCell(2);
    var cellCapacidade = linhatab.insertCell(3);
    var cellTipo = linhatab.insertCell(4);
    var cellAcessivel = linhatab.insertCell(5);

    cellNumero.innerHTML = numero;
    cellCodigo.innerHTML = codigo;
    cellNome.innerHTML = nome;
    cellCapacidade.innerHTML = capacidade;
    cellTipo.innerHTML = tipo;
    cellAcessivel.innerHTML = acessivel;
    console.log(cellNumero)
}
function carregarinfo1(){
    for(let i=1;i<=localStorage.cont;i++){
        var salaObtido = localStorage.getItem("sala_"+i);
        var vetorsala = JSON.parse(salaObtido);
        adicionarTabela(i, vetorsala.codigo, vetorsala.nome, vetorsala.cap, vetorsala.tipo, vetorsala.acces);
        
    }
}