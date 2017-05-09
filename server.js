var express = require("express");
var path = require("path");
var routes = require("./api/routes");

var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', routes);

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
})