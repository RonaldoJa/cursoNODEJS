import { Router } from 'express'
import { auth } from '../controllers/autentifiacion.js'

const router = Router()

import { getProductos, getProductoId, postProducto, putProducto, deleteProducto } from '../controllers/controlProducto.js'


router.get('/', getProductos)
router.get('/:id', getProductoId)
router.post('/', auth, postProducto)
router.put('/:id', auth, putProducto)
router.delete('/:id', auth, deleteProducto)



export default router;