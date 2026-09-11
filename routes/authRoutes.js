const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { register, login, getProfile } = require('../controllers/authController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests, please try again later' }
});

router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);
router.get('/profile', verifyToken, getProfile);

module.exports = router;