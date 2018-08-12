const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'https://search.artsmia.org/',
  log: 'trace',
});

module.exports = client;