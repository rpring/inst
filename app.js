var https = require('https');
var client = require('./config.json');
var querystring = require('querystring');

var auth_path = ''; // /oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code
auth_path += '/oauth/authorize/?client_id=';
auth_path += client.id;
auth_path += '&redirect_uri=';
auth_path += client.redirect_uri;
auth_path += '&response_type=code';

var token_path = '/oauth/access_token';

var postDataToken = querystring.stringify({
  'client_id': client.id,
  'client_secret': client.secret,
  'grant_type': 'authorization_code' ,
  'redirect_uri': client.redirect_uri,
  'code': client.code
});

// var postData = querystring.stringify({

// });

var path = 'media/search?q=ski&lat=43&lng=-79&';

var options = {
  hostname: 'api.instagram.com',
  port: 443,
  path: '/v1/' + path + 'access_token=' + client.access_token + '&count=100',
  method: 'GET',
  headers: {
  }
};

var req = https.request(options, function(res) {
  var data = '';

  res.on('data', function(chunk) {
    data+=chunk;
  });

  res.on('end', function() {
    // var str = data.toString();
    // data = JSON.parse(data);
    // data.data.forEach(function(element) {
    //   console.log(element.user);
    // });
    console.log(data);
  });

});

// req.write();

req.end();

req.on('error', function(err) {
  // console.log(err);
});