import { Router } from 'express'

const router = Router()

import { getProductos, getProductoId, postProducto, putProducto, deleteProducto } from '../controllers/index.js'


router.get('/', getProductos)
router.get('/:id', getProductoId)
router.post('/', postProducto)
router.put('/:id', putProducto)
router.delete('/:id', deleteProducto)



export default router;