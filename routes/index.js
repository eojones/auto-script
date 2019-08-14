const express = require('express');
const router = express.Router();
const controller = require('../src/controllers/index')

router
.post('/open-url', controller.post)
.get('/report', controller.get);

module.exports = router;
