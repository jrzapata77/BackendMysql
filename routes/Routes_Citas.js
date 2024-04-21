// importamos express
import express from 'express';

import { agregarCitas, eliminarCita, getAllCitas, modificarCita, getCitas } from '../controllers/CitasController.js';

const router = express.Router();

router.post('/', agregarCitas);
router.get('/', getAllCitas);
router.get('/:id', getCitas);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);



export default router;