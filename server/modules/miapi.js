const axios = require('axios'); 

const miaSearch = axios.create({
  baseURL: 'https://search.artsmia.org',
});

const miaImage = axios.create({
  baseURL: 'https://api.artsmia.org/images',
})

module.exports = {
  async searchForArt(query) {
    return miaSearch.get(`/${query}`)
      .then(response => response.data)
      .catch(err => err);
  },
  async getArtById(id) {
    return miaSearch.get(`/id/${id}`)
      .then(response => response.data)
      .catch(err => err);
  },
  async getImage(id, size = 'small') {
    return miaImage.get(`/${id}/${size}.jpg`)
      .then(response => response.data)
      .catch(err => err);
  }
}