let numeroSecreto = 7;
let tentativa;
let contador = 0;

do {
    tentativa = Number(prompt("Adivinhe o número secreto (entre 1 e 10):"));
    
    contador = contador + 1;

    if (tentativa != numeroSecreto) {
        alert("Errado! Tente novamente.");
    }

} while (tentativa != numeroSecreto);

alert("Parabéns! Você acertou em " + contador + " tentativas.");