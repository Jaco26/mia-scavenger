const miapi = require('axios').create({
  baseURL: 'https://search.artsmia.org',
});

module.exports = {
  async searchForArt(query) {
    return miapi.get(`/${query}`)
      .then(response => response.data)
      .catch(err => err);
  },
  async getArtById(id) {
    return miapi.get(`/id/${id}`) 
      .then(response => response.data)
      .catch(err => err);
  },
}