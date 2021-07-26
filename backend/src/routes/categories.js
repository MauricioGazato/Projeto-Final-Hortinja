const router = require('express').Router()
const {categories} = require('../controllers')

//Mapeando as rotas das categorias
router.get('/', categories.list)
router.post('/', categories.create)

module.exports = router