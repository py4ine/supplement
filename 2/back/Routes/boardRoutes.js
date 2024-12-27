const express = require('express');
const router = express.Router();
const boardCtrl = require('../Controllers/boardCtrl');

router.get('/', boardCtrl.getBoard);
router.post('/regist', boardCtrl.registBoard);

module.exports = router