/* Exercício: Sistema de Lista Interativa

Você deve criar uma pequena aplicação onde o usuário:

Adiciona itens a uma lista

Marca itens como concluídos

Remove itens

Conta quantos itens estão concluídos

🎯 Requisitos Funcionais

Um campo input

Um botão Adicionar

Uma lista (ul)

Um contador de tarefas concluídas

📄 Estrutura HTML Base
<div class="container">
    <h2>Lista de Tarefas</h2>

    <input type="text" id="input_tarefa" placeholder="Digite uma tarefa">
    <button id="btn_adicionar">Adicionar</button>

    <ul id="lista"></ul>

    <p>Concluídas: <span id="contador">0</span></p>
</div>
📌 Regras de Implementação (Importante)
1️⃣ Ao clicar em Adicionar:

Criar um <li>

Inserir o texto digitado

Adicionar na <ul>

2️⃣ Ao clicar em uma tarefa:

Alternar classe concluida

Atualizar contador

3️⃣ Ao dar duplo clique na tarefa:

Remover a tarefa da lista

Atualizar contador

📌 Regras Técnicas

Você deve usar:

addEventListener

click

dblclick

classList.toggle

createElement

appendChild

remove

textContent

🎨 CSS Sugerido
.concluida {
    text-decoration: line-through;
    color: gray;
}
🧩 Desafio Extra (Nível 2)

Implemente:

Se o input estiver vazio → não adicionar

Pressionar Enter também adiciona

Mostrar total geral de tarefas

🚀 Desafio Avançado (Nível 3)

Refaça usando delegação de eventos (um único addEventListener na <ul>). */