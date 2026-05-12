let totalPedido = 0;
let opcao;

do {
    opcao = Number(prompt("1-Café| 2-Capuccino| 3-Pão de Queijo| 0-Sair"));

    switch (opcao) {
        case 1:
            totalPedido = totalPedido + 5;
            alert("Item 1 adicionado!");
            break;
        case 2:
            totalPedido = totalPedido + 7;
            alert("Item 2 adicionado!");
            break;
        case 3:
            totalPedido = totalPedido + 4;
            alert("Item 3 adicionado!");
            break;
        case 0:
            break;
        default:
            alert("Opção inválida");
    }

} while (opcao != 0);

alert("Total: R$ " + totalPedido);