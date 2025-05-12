import express from 'express';
import * as backendController from '#src/controllers/backend.controller.js';

import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();
// authenticateToken, authorize(['user', 'admin']),
// DC
router.post('/backend/DC', authenticateToken, authorize(['admin']), backendController.createDc);
router.get('/backend/DC', authenticateToken, authorize(['user', 'admin']), backendController.getDc);
router.put('/backend/DC', authenticateToken, authorize(['admin']), backendController.updateDc);
router.delete('/backend/DC', authenticateToken, authorize(['admin']), backendController.deleteDc);
router.get('/backend/allDC', authenticateToken, authorize(['user', 'admin']), backendController.getAllDc);
// Room
router.post('/backend/rooms', authenticateToken, authorize(['admin']), backendController.createRooms);
router.get('/backend/room', authenticateToken, authorize(['user', 'admin']), backendController.getRoom);
router.put('/backend/room', authenticateToken, authorize(['admin']), backendController.updateRoom);
router.delete('/backend/room', authenticateToken, authorize(['admin']), backendController.deleteRoom);

// Rack
router.post('/backend/racks', authenticateToken, authorize(['admin']), backendController.createRacks);
router.get('/backend/rack', authenticateToken, authorize(['user', 'admin']), backendController.getRack);
router.put('/backend/rack', authenticateToken, authorize(['admin']), backendController.updateRack);
router.delete('/backend/rack', authenticateToken, authorize(['admin']), backendController.deleteRack);

// Server
router.post('/backend/server', authenticateToken, authorize(['user', 'admin']), backendController.createServer);
router.get('/backend/server', authenticateToken, authorize(['user', 'admin']), backendController.getServer);
router.put('/backend/server', authenticateToken, authorize(['user', 'admin']), backendController.updateServer);
router.delete('/backend/server', authenticateToken, authorize(['user', 'admin']), backendController.deleteServer);
router.get('/backend/server/allServer', authenticateToken, authorize(['user', 'admin']), backendController.getAllServer);
// IP
router.post('/backend/ip', authenticateToken, authorize(['user', 'admin']), backendController.assign);
router.post('/backend/ip/pool', authenticateToken, authorize(['user', 'admin']), backendController.createIpPool);
router.delete('/backend/ip', authenticateToken, authorize(['user', 'admin']), backendController.release);
router.get('/backend/ip/allIp', authenticateToken, authorize(['user', 'admin']), backendController.getAllIp);
router.get('/backend/ip/usedIp', authenticateToken, authorize(['user', 'admin']), backendController.getUsedIp);
router.get('/backend/ip/pool', authenticateToken, authorize(['user', 'admin']), backendController.getIpPool);
router.get('/backend/ip/allPools', authenticateToken, authorize(['user', 'admin']), backendController.getAllIpPools);

export default router;
