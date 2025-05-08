import express from 'express';

import {
  createDc,
  getDc,
  getAllDc,
  updateDc,
  deleteDc,
  createRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} from '#src/controllers/backend.controller.js';
import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();
// authenticateToken, authorize(['user', 'admin']),
// DC
router.post('/backend/DC', authenticateToken, authorize(['admin']), createDc);
router.get('/backend/DC', authenticateToken, authorize(['user', 'admin']), getDc);
router.put('/backend/DC', authenticateToken, authorize(['admin']), updateDc);
router.delete('/backend/DC', authenticateToken, authorize(['admin']), deleteDc);
router.get('/backend/allDC', authenticateToken, authorize(['user', 'admin']), getAllDc);
// Room
router.post('/backend/rooms', authenticateToken, authorize(['admin']), createRooms);
router.get('/backend/room', authenticateToken, authorize(['user', 'admin']), getRoom);
router.put('/backend/room', authenticateToken, authorize(['admin']), updateRoom);
router.delete('/backend/room', authenticateToken, authorize(['admin']), deleteRoom);

export default router;
