const usuariosCadastrados = [];

const formulario = document.getElementById('cadastroForm');
const listaNaTela = document.getElementById('listaUsuarios');
const feedback = document.getElementById('mensagemFeedback');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Passo 4: Captura todos os campos (faltavam alguns aqui!)
    const nomeValor = document.getElementById('nome').value;
    const cpfValor = document.getElementById('cpf').value;
    const emailValor = document.getElementById('email').value;
    const celularValor = document.getElementById('celular').value; // NOVO
    const nascimentoValor = document.getElementById('nascimento').value; // NOVO

    feedback.textContent = ""; 
    feedback.className = "";

    // --- VALIDAÇÕES ---
    if (!nomeValor.trim().includes(" ")) {
        feedback.textContent = "Por favor, digite seu nome completo.";
        feedback.className = "erro";
        return;
    }

    if (isNaN(cpfValor) || cpfValor.length !== 11) {
        feedback.textContent = "CPF inválido. Digite apenas os 11 números.";
        feedback.className = "erro";
        return;
    }

    // Passo 5: Criamos o objeto (precisamos colocar os novos dados aqui dentro!)
    const novoUsuario = {
        nome: nomeValor,
        cpf: cpfValor,
        email: emailValor,
        celular: celularValor,     // NOVO: Agora o celular está no "cofre"
        nascimento: nascimentoValor // NOVO: Agora a data está no "cofre"
    };

    usuariosCadastrados.push(novoUsuario);

    feedback.textContent = "Cadastro realizado com sucesso!";
    feedback.className = "sucesso";

    exibirListaAtualizada();
    formulario.reset();

    setTimeout(() => {
        feedback.textContent = "";
    }, 3000);
});



function exibirListaAtualizada() {
    listaNaTela.innerHTML = "";

    usuariosCadastrados.forEach((user) => {
        const li = document.createElement('li');
        li.className = "card-usuario";

        // Agora, como os dados existem no objeto 'user', eles vão aparecer!
        li.innerHTML = `
            <strong>Nome:</strong> ${user.nome} <br>
            <strong>CPF:</strong> ${user.cpf} <br>
            <strong>Celular:</strong> ${user.celular} <br>
            <strong>E-mail:</strong> ${user.email} <br>
            <small>Data Nasc: ${user.nascimento}</small>
        `;

        listaNaTela.appendChild(li);
    });
}