const router = require('express').Router()
const {categories} = require('../controllers')

//Mapeando as rotas das categorias
router.get('/', categories.list)

module.exports = router