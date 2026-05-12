let senhaCorreta = "1234";
let tentativa;

do {
    tentativa = prompt("Digite a senha:");
    if (tentativa !== senhaCorreta) {
        alert("Senha incorreta! Tente novamente.");
    }
} while (tentativa !== senhaCorreta);

alert("Acesso Permitido");
