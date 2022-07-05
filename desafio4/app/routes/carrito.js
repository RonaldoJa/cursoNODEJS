import { Router } from 'express'

const router = Router()

import { getCarrito, postCarrito } from '../controllers/controlCarrito.js'

router.get('/', getCarrito)
router.post('/', postCarrito)

export default router;