//Importando ferramentas
const express = require ('express')
const cors = require ('cors')
const helmet = require ('helmet')
const routes = require('./routes')

const app = express();

app.use(express.json())
app.use(cors())
//Dentro do app existem essas rotas disponiveis
app.use(routes)

//Proteções de Segurança
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.hidePoweredBy())

module.exports = app;