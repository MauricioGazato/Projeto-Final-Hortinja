const router = require('express').Router()

const categories = require('./categories')
const horticulturals = require('./horticulturals')

//Mapeando as rotas do App

//Rotas das Categorias
router.use('/categories', categories)

//Rotas dos Hortifrutis
router.use('/horticulturals', horticulturals)

module.exports = router