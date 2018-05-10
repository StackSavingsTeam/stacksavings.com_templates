var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 80))
app.use(express.static(__dirname + '/layouts'))

app.get('/', function(request, response) {
  response.send('StackSavings.com files')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})