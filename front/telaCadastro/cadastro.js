let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Corrigido para usar 'event'

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const idade = document.getElementById('idade').value;
    const senha = document.getElementById('senha').value;

    let formData = {
        nome: nome,
        cpf: cpf,
        email: email,
        idade: idade,
        senha: senha
    };

    const PORT = 3020;
    const baseUrl = `http://localhost:${PORT}`;
    const url = `${baseUrl}/cadastro`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        // Exibir mensagem de sucesso
        formularioSucesso();
        setTimeout(() => {
            window.location.href = `/front/telaCadastro/cadastro.html`;
        }, 5000);
    })
    .catch((error) => {
        console.log(error);
    });
});

// Função para exibir mensagem de sucesso
function formularioSucesso() {
    const botao = document.getElementById('submitButton');
    botao.style.backgroundColor = 'green';
    botao.innerText = 'Cadastrado com Sucesso!';

    const mensagemSucesso = document.getElementById('successMessage');
    mensagemSucesso.style.display = 'block';

}