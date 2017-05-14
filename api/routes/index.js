var express = require('express');
var router = express.Router();

var ctrlTime = require("../controllers/time.controllers.js");

router
    // .route('/:dateID')
    .get('/new/*?',ctrlTime.getSUrl);
    
router
    // .route('/:dateID')
    .get('/:id',ctrlTime.getID);    
    
module.exports = router;    