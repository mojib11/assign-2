const express = require('express');
const router = express.Router();
const StController = require('../controller/StController');

router.post('/upload',StController.StPhoto)

module.exports=router;