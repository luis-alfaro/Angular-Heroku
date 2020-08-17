app.use(express.static('./dist/Angular-Heroku'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/Angular-Heroku/'});
});
app.listen(process.env.PORT || 8080);