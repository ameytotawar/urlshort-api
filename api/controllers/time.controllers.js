var parse = require('user-agent-parser');

module.exports.getAll = function(req, res) {
    console.log('GET hotelId', req.params.dateID);
    var os = parse(req.headers["user-agent"]);
    res.json({
        ipaddress: req.ip,
        language: req.headers["accept-language"].split(";")[0],
        software: os.os.name + " " + os.os.version
    });
};   