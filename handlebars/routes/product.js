const { Router } = require('express')
const router = Router()
const { getProduct, postProduct, viewForm } = require('../controllers/product.controller')

router.get('/', getProduct)

router.get('/crear', viewForm)

router.post('/', postProduct)

module.exports = router