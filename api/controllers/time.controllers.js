var moment = require("moment");

module.exports.getTime = function(req, res) {
    console.log('GET hotelId', req.params.dateID);
    var myDate;
    if(req.params.dateID.indexOf(",") == -1) {
        console.log("-1 match");
        myDate = moment(req.params.dateID, "X");
    }
    else {
        console.log("-1 not match");
        myDate = moment(req.params.dateID, "MMMM D, YYYY");
    }
    
    console.log('GET myDate', myDate);
    
    if(myDate.isValid()) {
        res
            .status(200)
            .json({
                unix: myDate.format("X"),
                natural: myDate.format("MMMM D, YYYY")
            });
    }    
    else {
        res
            .status(200)
            .json({
                unix: null,
                natural: null
            });
    }
};

module.exports.getAmey = function(req, res) {
    console.log('GET Amey');
    var myDate;
};    