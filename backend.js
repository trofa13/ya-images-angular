var Parser, request, config, url;
 
// npm dependencies 
Parser  = require("jq-html-parser");
request = require("request");
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
 
// config, etc. 
config = {
  image: {
    selector: "img",
    //attribute: "style",
    //regexp: "url\\(([\/A-z0-9]+.png)\\)"
  }
};
url = "https://yandex.ru/images/search?format=json&request=%5B%7B%22block%22%3A%22serp-controller%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22serp-list_infinite_yes%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22more_direction_next%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22gallery__items%3Aajax%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%5D&p=1&text=";


//'https://yandex.ru/images/search?text='


//"https://yandex.ru/images/search?format=json&request=%5B%7B%22block%22%3A%22serp-controller%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22serp-list_infinite_yes%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22more_direction_next%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22gallery__items%3Aajax%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%5D&p=1&text=";
 
// request a page 
/*request.get(url, function(err, res, body){
 
  // handle error and non-200 response here 
  if(err || (res.statusCode != 200)){
    return console.log("An error occured.");
  }
 
  var parser, result;
 
  // parse body 
  parser = new Parser(config);
  result = parser.parse(body);
 
  console.log(result.title); // "Google" 
  console.log(result.logo);  // "/images/srpr/logo11w.png" 
 
});*/

app.get('/', function(req, res){
  var requestText = req.query.search;
      url += requestText;
    request.get(url, function(err, resp, body){
        if(err || (resp.statusCode != 200)){
          return console.log("An error occured.");
      }

      var parser = new Parser(config),
          result = parser.parse(body);
      res.send(body);
    })
    
});

var server = app.listen(3001, function(){
    console.log('server started at :3001');
});