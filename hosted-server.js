"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.get('/', function () {
  res.send('hello from heroku!');
});
var PORT = process.env.PORT || 8000; //environment var!

app.listen(PORT, function () {
  console.log('app is listening on port ' + PORT);
});
