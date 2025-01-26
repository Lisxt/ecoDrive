const PORT = 3020;
const baseUrl = `http://localhost:${PORT}`;
const url = `${baseUrl}/login`;


    let btnDelete = document.getElementById('btnDelete') 
    btnDelete.addEventListener('click', function (event) {
        event.preventDefault();
       
            const cpf = document.getElementById('cpf').value; 
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