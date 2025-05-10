import express from 'express';
import * as backendContorller from '#src/controllers/backend.controller.js';

import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();
// authenticateToken, authorize(['user', 'admin']),
// DC
router.post('/backend/DC', authenticateToken, authorize(['admin']), backendContorller.createDc);
router.get('/backend/DC', authenticateToken, authorize(['user', 'admin']), backendContorller.getDc);
router.put('/backend/DC', authenticateToken, authorize(['admin']), backendContorller.updateDc);
router.delete('/backend/DC', authenticateToken, authorize(['admin']), backendContorller.deleteDc);
router.get('/backend/allDC', authenticateToken, authorize(['user', 'admin']), backendContorller.getAllDc);
// Room
router.post('/backend/rooms', authenticateToken, authorize(['admin']), backendContorller.createRooms);
router.get('/backend/room', authenticateToken, authorize(['user', 'admin']), backendContorller.getRoom);
router.put('/backend/room', authenticateToken, authorize(['admin']), backendContorller.updateRoom);
router.delete('/backend/room', authenticateToken, authorize(['admin']), backendContorller.deleteRoom);

// Rack
router.post('/backend/racks', authenticateToken, authorize(['admin']), backendContorller.createRacks);
router.get('/backend/rack', authenticateToken, authorize(['user', 'admin']), backendContorller.getRack);
router.put('/backend/rack', authenticateToken, authorize(['admin']), backendContorller.updateRack);
router.delete('/backend/rack', authenticateToken, authorize(['admin']), backendContorller.deleteRack);

export default router;
