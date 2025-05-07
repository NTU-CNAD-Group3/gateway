import express from 'express';

import { createDc, getDc, getAllDc, updateDc, deleteDc } from '#src/controllers/backend.controller.js';
import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();
// authenticateToken, authorize(['user', 'admin']),
router.post('/backend/DC', authenticateToken, authorize(['admin']), createDc);
router.get('/backend/DC', authenticateToken, authorize(['user', 'admin']), getDc);
router.put('/backend/DC', authenticateToken, authorize(['admin']), updateDc);
router.delete('/backend/DC', authenticateToken, authorize(['admin']), deleteDc);
router.get('/backend/allDC', authenticateToken, authorize(['user', 'admin']), getAllDc);

export default router;
