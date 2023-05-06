import express from 'express';
import { register, login, addPermissions } from '../controllers/index.js';
const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/permissions/:id', addPermissions);

export default router;
