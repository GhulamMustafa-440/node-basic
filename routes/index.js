const express = require('express')
const router = express.Router()

//router.use('/chats', require('./chat.js'))
router.use('/rides', require('./rides.js'))
router.use('/auth', require('./auth.js'))

module.exports = router