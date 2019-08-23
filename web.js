var express = require('express');
var app = express();

var newDomain = process.env.NEW_DOMAIN || 'example.com';
var redirectStatus = parseInt(process.env.REDIRECT_STATUS || 302);
var port = process.env.PORT || 5000;

app.get('*', function(request, response) {
  const domain = request.hostname.split('.').slice(0,-2).concat(newDomain).join('.');
  response.redirect(redirectStatus, 'http' + (request.secure?'s':'') + "://" + domain + request.url);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
