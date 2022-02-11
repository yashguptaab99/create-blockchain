import express from 'express';
import chainRouter from './chain.js';

const router = express.Router();

router.use('/chain', chainRouter);

// test route
router.get('/ping', (req, res) => {
  res.end('pong');
});

export default router;
