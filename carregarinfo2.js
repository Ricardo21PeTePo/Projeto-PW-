function adicionarTabela2(numero, codigo, nome, ano, diretor, atores){
    var tb = document.getElementById("tbFilme4");
    var qtdLinhas = tb.rows.lenght;
    var linhatab = tb.insertRow(qtdLinhas);

    var cellNumero = linhatab.insertCell(0)
    var cellCodigo = linhatab.insertCell(1);
    var cellNome = linhatab.insertCell(2);
    var cellAno = linhatab.insertCell(3);
    var cellDiretor = linhatab.insertCell(4);
    var cellAtores = linhatab.insertCell(5);

    cellNumero.innerHTML = numero;
    cellCodigo.innerHTML = codigo;
    cellNome.innerHTML = nome;
    cellAno.innerHTML = ano;
    cellDiretor.innerHTML = diretor;
    cellAtores.innerHTML = atores;
    console.log(cellNumero)
}
function carregarinfo2(){
    for(let i=1;i<=localStorage.cont2;i++){
        var filmeObtido = localStorage.getItem("filme_"+i);
        var vetorfilme = JSON.parse(filmeObtido);
        adicionarTabela2(i, vetorfilme.codigo, vetorfilme.nome, vetorfilme.ano, vetorfilme.diretor, vetorfilme.atores);
        
    }
}