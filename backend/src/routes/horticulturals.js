const router = require('express').Router()
const { horticulturals } = require('../controllers')

router.get('/', horticulturals.list)
router.post('/', horticulturals.create)
router.get('/:id', horticulturals.show)
router.patch('/:id', horticulturals.update)
router.delete('/:id', horticulturals.destroy)

module.exports = router