const app = require('express')();
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const userRoutes = require('./routes/user-routes');
const searchRoutes = require('./routes/search-routes');

app.use('/api/user', userRoutes);
app.use('/api/search', searchRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log('Server listening on port:', port);
});