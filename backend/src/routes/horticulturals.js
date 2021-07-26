const router = require('express').Router()
const { horticulturals } = require('../controllers')

router.get('/', horticulturals.list)

module.exports = router