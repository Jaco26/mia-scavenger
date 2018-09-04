const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
require('dotenv').config();


app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('dist'));

const userRoutes = require('./routes/user-routes');
const searchRoutes = require('./routes/search-routes');
const artRandom =  require('./routes/art-random')

app.use('/api/user', userRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/art', artRandom)

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log('Server listening on port:', port);
});