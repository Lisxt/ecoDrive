function handleCadastro(event) {
    event.preventDefault();
    const botao = document.getElementById('submitButton');
    botao.style.backgroundColor = 'green';
    botao.innerText = 'Cadastrado com Sucesso!';

    const mensagemSucesso = document.getElementById('successMessage');
    mensagemSucesso.style.display = 'block';
}
