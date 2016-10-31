const express = require('express'),
      morgan = require('morgan'),
      pug = require('pug'),
      app = express();
const router = require('./routes');

//logging
if(process.env.NODE_ENV === 'production'){
  app.use(morgan('combined'));
}else{
  app.use(morgan('dev'));
}

app.set('view engine', 'pug');

//start serving.
var server = app.listen(process.env.PORT, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

//router and static
app.use('/public', express.static('public'));
app.use('/', router);


//error handler
app.use(function errorHandler(err, req, res, next) {
  console.log(err);
  res.status(500).send({ error: err.message });
});
