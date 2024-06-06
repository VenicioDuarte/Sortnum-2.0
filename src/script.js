function sortear() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('resultado').innerText = 'Número Sorteado: ' + numeroSorteado;
}
