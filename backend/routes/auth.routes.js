import express from 'express';
import {
  signup,
  login,
  sendResetCode,
  resetPassword,
} from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', sendResetCode);
router.post('/reset-password', resetPassword);


router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'Profile information', userId: req.userId }); 
});

export default router;
