// Projeto desenvolvido para fins educativos

const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require('mysql2')

// Utilizado para processar o corpo da requisição
app.use(express.json())

// Isso libera acesso a sua api por qualquer endereço (cuidado! - não use em produção - especifique) 
app.use(cors());


// Configuração do banco de dados
const bancoDeDados = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecoDrive'
})

// Estabelecendo a conexão com banco de dados
bancoDeDados.connect((error)=>{
    if(error){
      //  console.log("Eita parece que tivemos um erro aqui: ", error)
        return;
    } 
  //  console.log("Conectado ao banco de dados com sucesso!")
})

app.get('/cadastro', (req, res) => {
    const query = "SELECT * FROM cadastro";
    bancoDeDados.query(query, (error, results) => {
        if (error) {
            res.status(400).json({ mensagem: "Erro ao busca cadastro" });
        }
        res.json(results);
    })
})

// Rota de criação de tarefa (existem vários tipos: get, post, put, patch...Pesquisem sobre)
app.post('/cadastro', (req, res) => {

    // Valores que vamos receber do front
    const { nome } = req.body;
    const { cpf } = req.body;
    const { email } = req.body;
    const { idade } = req.body;
    const { senha } = req.body;


    
    // Query
    const insereCadastro = 'INSERT INTO cadastro(nome, cpf, email, idade, senha) VALUES(?, ?, ?, ?, ?)'

    // Execução da query
    bancoDeDados.query(insereCadastro, [nome, cpf, email, idade, senha], (error, resultado) => {
        if(error){
          //  console.log("Eita parece que tivemos um erro ao inserir a tarefa: ", error)
            return res.json(error);
        }

       return res.status(201).json({ message: 'cadastro inserido com sucesso', result: resultado });
    })

})

app.delete('/deletar/cadastro', (req, res)=>{
    const { cpf } = req.body;

    const deletaCadastro = 'DELETE FROM cadastro WHERE cpf = ?'

    bancoDeDados.query(deletaCadastro, [cpf], (error, resultado) => {
        if(error){
            return res.json(error);
        }
        return res.status(200).json({ message: 'cadastro deletado com sucesso', resultado})
    })
})



// Escutando o servidor
app.listen(3020, ()=>{
    console.log("Opa opa o servidor está rodando! ;)")
})

/* obs. Para iniciar esse serviço, abra a pasta desse projeto no terminal e digite node ./app_backend.js  (Esse nome deve ser igual ao nome do seu arquivo).

Se tudo correr bem, deve aparecer uma mensagem semelhante a essa 'Opa opa o servidor está rodando! ;)'
se conexão com o banco de dados for estabelecida, deve aparecer uma mensagem semelhante a essa: 'Conectado ao banco de dados com sucesso'

*/


// Vou deixar aqui em baixo as funções que uso para formatar os textos, exemplo datas
function formatarDataTime(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');  // Meses começam do 0, então somamos 1
    const day = d.getDate().toString().padStart(2, '0');
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  