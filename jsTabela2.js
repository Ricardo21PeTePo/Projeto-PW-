function cadFilme(codigo, nome, ano, diretor, atores) {

    var tb = document.getElementById("tbFilme");
    var qtddLinhas = tb.rows.length;
    var linha = tb.insertRow(qtddLinhas);

    var cellNumero = linha.insertCell(0)
    var cellCodigo = linha.insertCell(1);
    var cellNome = linha.insertCell(2);
    var cellAno = linha.insertCell(3);
    var cellDiretor = linha.insertCell(4);
    var cellAtores = linha.insertCell(5);

    cellNumero.innerHTML = qtddLinhas;
    cellCodigo.innerHTML = codigo;
    cellNome.innerHTML = nome;
    cellAno.innerHTML = ano;
    cellDiretor.innerHTML = diretor;
    cellAtores.innerHTML = atores;
}