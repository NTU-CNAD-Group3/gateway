import express from 'express';

import authRoutes from '#src/routes/auth.route.js';
import backendRoutes from '#src/routes/backend.route.js';
import config from '#src/config.js';

const router = express.Router();
const BASE_PATH = `/${config.API_VERSION}/gateway`;
router.get('/healthy', (req, res) => {
  res.send('API Gateway service is healthy.');
});
router.get('/test', (req, res) => {
  res.send('Test backend route hit');
});
router.use(BASE_PATH, authRoutes);
router.use(BASE_PATH, backendRoutes);

export default router;
