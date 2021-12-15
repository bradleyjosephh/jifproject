const router = require('express').Router()

router.use('/api', require('./htmlRoutes.js'))

module.exports = router