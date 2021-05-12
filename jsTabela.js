function cadSala(codigo, nome, capacidade, tipo, acessivel) {

    var tb = document.getElementById("tbCinema");
    var qtddLinhas = tb.rows.length;
    var linha = tb.insertRow(qtddLinhas);

    var cellNumero = linha.insertCell(0)
    var cellCodigo = linha.insertCell(1);
    var cellNome = linha.insertCell(2);
    var cellCapacidade = linha.insertCell(3);
    var cellTipo = linha.insertCell(4);
    var cellAcessivel = linha.insertCell(5);

    cellNumero.innerHTML = qtddLinhas;
    cellCodigo.innerHTML = codigo;
    cellNome.innerHTML = nome;
    cellCapacidade.innerHTML = capacidade;
    cellTipo.innerHTML = tipo;
    cellAcessivel.innerHTML = acessivel;
}