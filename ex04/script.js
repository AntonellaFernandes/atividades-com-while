let nomeProduto;
let contadorLetras;

do {
    nomeProduto = prompt("Digite o nome do produto:");
    
    contadorLetras = 0;

    for (let letra of nomeProduto) {
        contadorLetras = contadorLetras + 1;
    }

    if (contadorLetras < 3) {
        alert("Nome inválido. O produto deve ter no mínimo 3 caracteres");
    }

} while (contadorLetras < 3);

alert("Produto '" + nomeProduto + "' cadastrado com sucesso!");