import express from 'express';

import { createDc, getDc } from '#src/controllers/backend.controller.js';
// import { authenticateToken } from '#src/middleware/authenticate.js';
// import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();
// authenticateToken, authorize(['user', 'admin']),
router.post('/backend/DC', createDc);
router.get('/backend/DC', getDc);

export default router;
