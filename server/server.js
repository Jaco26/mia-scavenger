const app = require('express')();
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./routes');

app.use('/api/', routes);

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log('Server listening on port:', port);
});