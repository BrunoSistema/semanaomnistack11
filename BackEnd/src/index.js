//importando o modulo exprss pra dentre de uma variavel
const express = require('express');
const cors = require('cors');
//importando as rotas
const routes = require('./routes');

//Criando a aplicação
const app = express();

//informando que iremos usa o cors
app.use(cors());

//informando que iremos usar json
app.use(express.json());

app.use(routes);

/**
*Metodos Http:
* GET: Buscar/Listar Informação
* POST: Criar uma informação
* PUT: Editar uma informação
* DELETE: Deletar uma informação
 */

 
/**
 * TIpo de parâmetros
 * 
 * Query params: Parâmetros nomeados enviados na rota após o simbolo de "?" (filtros. paginação).
 * Rote params? Parêmetros ultilizados para identificar recursos.
 * Request Body: Corpo da Requisição, ultilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQl, SqlLite, Oracle, Sql Server
 * NoSQL: Mongo, CouchDB
 */

 /**
  * Driver: SELECT * FROM users
  * Query builder: table('user').select('*').where()
  */

//criando rota
app.post('/users', (request, response) => {
    const params = request.body;

    console.log(params);

    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Bruno'
    });
});

//fazendo a aplicação ouvir uma porta
app.listen(3333)