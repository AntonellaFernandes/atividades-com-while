let somaTotal = 0;
let continuar;

do {
    let numero = Number(prompt("Digite um número inteiro para somar:"));

    somaTotal = somaTotal + numero;

    continuar = prompt("Deseja inserir outro número? (s/n)");

} while (continuar == "s");

alert("A soma total dos números inseridos é: " + somaTotal);