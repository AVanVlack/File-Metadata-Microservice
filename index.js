const express = require('express'),
      morgan = require('morgan'),
      app = express();
const router = require('./routes');

//logging
if(process.env.NODE_ENV === 'production'){
  app.use(morgan('combined'));
}else{
  app.use(morgan('dev'));
}

//start serving.
var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

//router
app.use('/', router);

//error handler
app.use(function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send({ error: err.message });
});
