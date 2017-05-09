var express = require('express');
var router = express.Router();

var ctrlTime = require("../controllers/time.controllers.js");

router
    // .route('/:dateID')
    .get('/whoami',ctrlTime.getAll);
    
module.exports = router;    