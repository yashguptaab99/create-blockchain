import express from 'express';
import apiRouter from './api/index.js';

const router = express.Router();

router.use('/api', apiRouter);

// test route
router.get('/ping', (req, res) => {
  res.end('pong');
});

export default router;
