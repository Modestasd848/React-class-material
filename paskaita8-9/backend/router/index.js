import authRouter from './auth/auth.js';
import express from 'express';
import postRouter from './post/post.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/posts', postRouter);

export default router;
