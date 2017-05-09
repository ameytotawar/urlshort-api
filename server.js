var express = require("express");
var path = require("path");
var routes = require("./api/routes");

var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', routes);

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port'));
})