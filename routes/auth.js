const express = require('express')
const router = express.Router()
const authenticateUser = require('../middleware/authentication')
const testUser = require('../middleware/test-user')
const { register, login, updateUser } = require('../controllers/auth')
const rateLimiter = require('express-rate-limit')

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: 'Too many trials, try after 15 minutes.',
  },
})

router.post('/register', apiLimiter, register)
router.post('/login', apiLimiter, login)
router.patch('/updateUser', authenticateUser, testUser, updateUser)

module.exports = router
