import express from 'express';
import { chainController } from '../../../controllers/index.js';

const router = express.Router();

router.get('/get-hello', chainController.hello);
export default router;
