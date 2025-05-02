import express from 'express';

import { createDc, getDc } from '#src/controllers/backend.controller.js';
import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();

router.post('/DC', authenticateToken, authorize(['user', 'admin']), createDc);
router.get('/DC', authenticateToken, authorize(['user', 'admin']), getDc);

export default router;
