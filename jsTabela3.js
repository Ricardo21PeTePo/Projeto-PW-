function cadSessao(filme, sala, data, horario, preço) {

    var tb = document.getElementById("tbSessao");
    var qtddLinhas = tb.rows.length;
    var linha = tb.insertRow(qtddLinhas);

    var cellNumero = linha.insertCell(0)
    var cellFilme = linha.insertCell(1);
    var cellSala = linha.insertCell(2);
    var cellData = linha.insertCell(3);
    var cellHora = linha.insertCell(4);
    var cellPreço = linha.insertCell(5);

    cellNumero.innerHTML = qtddLinhas;
    cellFilme.innerHTML = filme;
    cellSala.innerHTML = sala;
    cellData.innerHTML = data;
    cellHora.innerHTML = horario;
    cellPreço.innerHTML = preço;
}