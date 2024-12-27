const express = require('express');
const router = express.Router();
const testCtrl = require('../Controllers/testCtrl')

router.get('/test', testCtrl.getTest)

module.exports = router
