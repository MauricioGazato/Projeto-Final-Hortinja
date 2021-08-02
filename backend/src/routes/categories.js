const router = require('express').Router()
const {categories} = require('../controllers')

//Mapeando as rotas das categorias
router.get('/', categories.list)
router.post('/', categories.create)
router.get('/:id', categories.show)
router.patch('/:id', categories.update)

module.exports = router