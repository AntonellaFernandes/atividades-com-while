# Estruturas de Repetição em JavaScript (Do...While)

Este projeto reúne programas desenvolvidos em JavaScript utilizando a estrutura de repetição **do...while**. Diferente do laço comum, essa abordagem garante que o bloco de instruções seja executado pelo menos uma vez antes de validar a condição de parada, sendo ideal para interações que dependem de entradas do usuário.

A aplicação do **do...while** confere fluidez aos algoritmos, permitindo que o processamento ocorra de forma contínua até que os critérios de saída sejam plenamente satisfeitos.

---

### Atividades Desenvolvidas

* **#1 - Validação de Senha**
Defina uma senha fixa no seu código (ex: "1234"). O programa deve pedir para o usuário digitar a senha. O fluxo deve obrigatoriamente pedir a senha pelo menos uma vez e continuar pedindo até que o usuário digite a senha correta. Ao acertar, exiba "Acesso Permitido".

* **#2 - Soma com Confirmação**
O programa deve pedir para o usuário digitar um número inteiro e adicioná-lo a uma variável de soma total. Após inserir o número, o programa deve perguntar: "Deseja inserir outro número? (s/n)". O laço deve se repetir enquanto a resposta for "s". Quando terminar, exiba a soma total.

* **#3 - Jogo de Adivinhação**
O programa deve ter um número "secreto" pré-definido entre 1 e 10. Peça para o usuário tentar adivinhar o número. O laço deve continuar até ele acertar. Como avanço, implemente um contador: ao final, exiba uma mensagem de parabéns informando quantas tentativas o usuário precisou para acertar.

* **#4 - Validação de Cadastro**
Peça para o usuário cadastrar o nome de um produto. A regra de negócio exige que o nome do produto tenha pelo menos 3 caracteres. Utilize o do...while para garantir que o prompt seja exibido na primeira vez e repita a pergunta exibindo a mensagem "Nome inválido. O produto deve ter no mínimo 3 caracteres" caso a condição não seja atendida.

* **#5 - Desafio Final - Sistema de Cafeteria**
Crie um menu interativo para uma cafeteria. O programa deve exibir repetidamente as seguintes opções até o usuário decidir finalizar o pedido: 
1 - Café Expresso (R$ 5,00), 2 - Cappuccino (R$ 7,00), 3 - Pão de Queijo (R$ 4,00) e 0 - Finalizar Pedido. A cada opção escolhida, o programa deve somar o valor ao total do pedido e avisar que o item foi adicionado. Se o usuário digitar uma opção inválida, exiba "Opção inválida". O laço se encerra apenas quando o usuário digitar 0. Ao final, exiba a mensagem: "Pedido finalizado. O total da sua conta é R$ [valor total]".

---

### Execução dos Scripts

Para rodar os arquivos localmente, recomenda-se o uso do navegador (através de um arquivo HTML) ou ambiente que suporte as funções `prompt()` e `alert()`. Caso utilize o Node.js, certifique-se de ter as bibliotecas de entrada de dados instaladas.

---

### Considerações Técnicas

A estrutura **do...while** foi escolhida para conferir robustez às validações de entrada. Ela assegura que o diálogo com o usuário aconteça imediatamente no início do fluxo, tratando entradas inconsistentes de forma dinâmica e garantindo que o programa só prossiga quando os dados fornecidos estiverem corretos.