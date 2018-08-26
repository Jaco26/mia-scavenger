const axios = require('axios'); 

const miaSearch = axios.create({
  baseURL: 'https://search.artsmia.org',
});

const filterArtResponse = (response) => {
  return response.data.hits.hits.reduce((accum, item, i) => {
    const x = item._source;
    accum.push({
      artist: x.artist,
      classification: x.classification,
      continent: x.continent,
      dated: x.dated,
      department: x.department,
      description: x.description,
      id: x.id,
      medium: x.medium,
      rights: x.rights,
      room: x.room,
      text: x.text,
      title: x.title,
      audioStops: x['related:audio-stops'],
      imgUrl: `https://api.artsmia.org/images/${x.id}/small.jpg`
    });
    return accum;
  }, []);
}

module.exports = {
  async searchForArt(query) {
    return miaSearch.get(`/${query}`)
      .then(response => filterArtResponse(response))
      .catch(err => err);
  },
  async getArtById(id) {
    return miaSearch.get(`/id/${id}`)
      .then(response => filterArtResponse(response))
      .catch(err => err);
  },
}