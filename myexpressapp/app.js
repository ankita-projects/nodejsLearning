const express = require('express')              //importing
var bodyParser = require('body-parser');
const app = express()                          //constructor object
const port = 3000
app.use(express.static('public'))              //to serve static pages from public directory

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post("/register", (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var password2 = req.body.password2;

  res.send(username + ' ' + email + ' ' + password + ' ' + password2 );
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})