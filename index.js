const express = require("express");
const path = require("path");
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join('public', 'index.html'));
});

app.get('/contact', (req, res) => {
   res.sendFile(__dirname + '/public/contact.html')
})

app.get('/succes', (req, res) => {
   res.sendFile(__dirname + '/public/succes.html')
})

app.get('/card', (req, res) => {
   res.sendFile(__dirname + '/public/card.html')
})

app.get('/*', (req, res) => {
   res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => console.info(`App listening on port ${port}`))