import express from 'express';
import * as backendController from '#src/controllers/backend.controller.js';

import { authenticateToken } from '#src/middleware/authenticate.js';
import { authorize } from '#src/middleware/authorize.js';

const router = express.Router();
// authenticateToken, authorize(['user', 'admin']),
// DC
const all = ['verified_user', 'unverified_user', 'admin'];
// const admin = ['admin'];
router.post('/backend/DC', authenticateToken, authorize(all), backendController.createDc);
router.get('/backend/DC', authenticateToken, authorize(all), backendController.getDc);
router.put('/backend/DC', authenticateToken, authorize(all), backendController.updateDc);
router.delete('/backend/DC', authenticateToken, authorize(all), backendController.deleteDc);
router.get('/backend/allDC', authenticateToken, authorize(all), backendController.getAllDc);
// Room
router.post('/backend/rooms', authenticateToken, authorize(all), backendController.createRooms);
router.get('/backend/room', authenticateToken, authorize(all), backendController.getRoom);
router.put('/backend/room', authenticateToken, authorize(all), backendController.updateRoom);
router.delete('/backend/room', authenticateToken, authorize(all), backendController.deleteRoom);

// Rack
router.post('/backend/racks', authenticateToken, authorize(all), backendController.createRacks);
router.get('/backend/rack', authenticateToken, authorize(all), backendController.getRack);
router.put('/backend/rack', authenticateToken, authorize(all), backendController.updateRack);
router.delete('/backend/rack', authenticateToken, authorize(all), backendController.deleteRack);

// Server
router.post('/backend/server', authenticateToken, authorize(all), backendController.createServer);
router.get('/backend/server', authenticateToken, authorize(all), backendController.getServer);
router.put('/backend/server', authenticateToken, authorize(all), backendController.updateServer);
router.delete('/backend/server', authenticateToken, authorize(all), backendController.deleteServer);
router.get('/backend/server/allServer', authenticateToken, authorize(all), backendController.getAllServer);
router.get('/backend/server/name', authenticateToken, authorize(all), backendController.getServerByName);
router.get('/backend/server/ip', authenticateToken, authorize(all), backendController.getServerByIp);
router.get('/backend/server/service', authenticateToken, authorize(all), backendController.getAllServerByService);
// IP
router.post('/backend/ip', authenticateToken, authorize(all), backendController.assign);
router.post('/backend/ip/pool', authenticateToken, authorize(all), backendController.createIpPool);
router.delete('/backend/ip', authenticateToken, authorize(all), backendController.release);
router.get('/backend/ip/allIp', authenticateToken, authorize(all), backendController.getAllIp);
router.get('/backend/ip/usedIp', authenticateToken, authorize(all), backendController.getUsedIp);
router.get('/backend/ip/pool', authenticateToken, authorize(all), backendController.getIpPool);
router.get('/backend/ip/allPools', authenticateToken, authorize(all), backendController.getAllIpPools);

export default router;
