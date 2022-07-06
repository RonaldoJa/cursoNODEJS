import { Router } from 'express'

const router = Router()

import { getCarrito, postCarrito, deleteCarrito, postCarritoProd } from '../controllers/controlCarrito.js'

router.get('/:id/productos', getCarrito)
router.post('/', postCarrito)
router.delete('/:id', deleteCarrito)
router.post('/:id/productos', postCarritoProd)
router.delete('/:id/productos/:id_prod', )

export default router;