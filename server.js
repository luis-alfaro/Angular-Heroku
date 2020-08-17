const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('./dist/Angular-Heroku'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/Angular-Heroku/'});
});
app.listen(process.env.PORT || 8080);

/*app.use(express.static(__dirname+'/dist/ng-blog'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
});*/