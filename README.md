# Link Cadastro de Usuário/cliente
https://jrapereira10.github.io/Cadastro-de-usuario/

# 🚀 Sistema de Cadastro com Validação em JavaScript

Este é um projeto prático desenvolvido para estudar os fundamentos do JavaScript, manipulação do DOM (Document Object Model), tratamento de arrays e validação de dados em formulários.

## 📋 Funcionalidades

- **Cadastro de Usuários:** Captura dados de nome, CPF, e-mail, celular, data de nascimento e senha.
- **Validações de Campo:**
  - Verifica se o nome contém pelo menos um sobrenome.
  - Valida se o CPF contém apenas números e possui 11 dígitos.
  - Impede o envio de campos vazios (validação nativa HTML5).
- **Feedback Visual:** Exibe mensagens de erro ou sucesso dinamicamente na página, sem utilizar `alert()`.
- **Listagem Dinâmica:** Após o cadastro, o usuário é adicionado a um Array e renderizado automaticamente em uma lista abaixo do formulário.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação do formulário e semântica.
*   **CSS3:** Estilização moderna e feedback visual de erros/sucesso.
*   **JavaScript (ES6):** Lógica de validação, manipulação de Array e controle de tempo com `setTimeout`.

## 💡 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, pratiquei:
1.  **`event.preventDefault()`**: Para controlar o envio do formulário sem recarregar a página.
2.  **`isNaN()`**: Para validar se entradas que deveriam ser numéricas contêm letras.
3.  **`forEach()`**: Para percorrer o array de usuários e gerar o HTML da lista.
4.  **Objetos Literais**: Para organizar as informações de cada usuário de forma estruturada.
5.  **Arrow Functions e Escopo**: Utilizados na lógica do `setTimeout`.

## 🚀 Como executar o projeto

1. Faça o clone do repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/nome-do-seu-repositorio.git](https://github.com/SEU-USUARIO/nome-do-seu-repositorio.git)
