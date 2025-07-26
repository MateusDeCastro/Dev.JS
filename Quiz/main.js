function vperg1(botaoClicado, opcaoSelecionada) {
    if (opcaoSelecionada == 'c1') {
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "gree";
        document.getElementById('resp1').innerHTML = "✅Parabéns, você acertou!🎉🎊"
    }
    else {
        var respCerta = document.getElementById('c1');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp1').innerHTML = "❌Resposta errada, que pena!"
    }
}

function reiniciar1() {
    document.getElementById('a1').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('b1').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('c1').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('d1').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('resp1').innerHTML = "";
}

function vperg2(botaoClicado, opcaoSelecionada) {
    if (opcaoSelecionada == 'b2') {
        var respCerta = document.getElementById('b2');
        respCerta.style.backgroundColor = "gree";
        document.getElementById('resp2').innerHTML = "✅Parabéns, você acertou!🎉🎊"
    }
    else {
        var respCerta = document.getElementById('b2');
        respCerta.style.backgroundColor = "green";
        botaoClicado.style.backgroundColor = "red";
        document.getElementById('resp2').innerHTML = "❌Resposta errada, que pena!"
    }
}

function reiniciar2() {
    document.getElementById('a2').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('b2').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('c2').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('d2').style.backgroundColor = "rgb(24, 2, 80)";
    document.getElementById('resp2').innerHTML = "";
}