const PORT = 3020;
const baseUrl = `http://localhost:${PORT}`;
const url = `${baseUrl}/login`;


// fetch(url, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
// }).then(resposta => resposta.json()).then(dados => {
//     const containerLogin = document.getElementById('login');
    
//     for (item of dados) {
//         const containerCardLogin = document.createElement('div');
//         containerCardLogin.classList.add('card-login');
//         containerLogin.appendChild(containerCardLogin);

//         // Criando os elementos no DOM
//         let cpf = document.createElement('h2');
//         let senha = document.createElement('h2');
//         let botaoDeletar = document.createElement('button');

//         // Atribuindo as propriedades dos dados de cada tarefa - card
//         cpf.textContent = item?.cpf;
//         senha.textContent = item?.senha;

//         // Atribuindo as propriedades do botão cancelar
//         botaoDeletar.innerText = 'Deletar';
//         botaoDeletar.type = 'submit';
//         botaoDeletar.id = `btn-Deletar-${item?.id}`;
//         botaoDeletar.classList.add('botaoDeletar');

//         // Atribuindo ao card o nome referente ao id do item a ser apagado
//         containerCardLogin.id = `card-login-${item?.id}`;

//         // Adicionando os elementos no DOM
//         containerCardLogin.appendChild(nome);
//         containerCardLogin.appendChild(senha);
//     }



// }).catch((error) => {
//     console.log(error);
// });


    let btnDelete = document.getElementById('btnDelete') 
    // Delegação de eventos: evento de clique para cancelar tarefa
    btnDelete.addEventListener('click', function (event) {
        event.preventDefault();
       
            const cpf = document.getElementById('cpf').value; // Recupera o id da tarefa
            console.log(`Cancelar login de cpf: ${cpf}`);
            
            fetch(`${baseUrl}/deletar/usuario`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ cpf: cpf })
            }).then(resposta => resposta.json()).then(dados => {
                window.alert("usuario deletada com sucesso!")
    
            }).catch((error) => {
                console.log(error);
            })
            

        
    });
