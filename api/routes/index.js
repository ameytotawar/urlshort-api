var express = require('express');
var router = express.Router();

var ctrlTime = require("../controllers/time.controllers.js");

router
    // .route('/:dateID')
    .get('/:dateID',ctrlTime.getTime);
    
router
    // .route('/amey')
    .get('/amey',ctrlTime.getAmey);
    
module.exports = router;    