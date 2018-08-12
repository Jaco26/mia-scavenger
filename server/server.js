const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 8081;

app.get('/api/test', (req, res) => {
  res.send({hi: 'Hello'});
})

app.listen(port, () => {
  console.log('Server listening on port:', port);
});