import { Router } from 'express';
import { auth } from '../controllers/autentifiacion.js'
const router = Router();


router.get('/', auth,(req, res) => {
    res.redirect('/api/productos');
});

export default router;