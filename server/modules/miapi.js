const axios = require('axios'); 

const miaSearch = axios.create({
  baseURL: 'https://search.artsmia.org',
});

const filterArtResponse = (response, random) => {  
  if(random)return response.data;
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
      tags: x.tags,
      imgAvailable: x.image === 'valid',
      imgUrl: `https://api.artsmia.org/images/${x.id}/small.jpg`
    });
    return accum;
  }, []);
}

module.exports = {
  searchForArt(query) {
    return miaSearch.get(`/${query}`)
      .then(response => filterArtResponse(response))
      .catch(err => err);
  },
  getArtById(id) {
    return miaSearch.get(`/id/${id}`)
      .then(response => filterArtResponse(response))
      .catch(err => err);
  },
  getArtByIds(ids) {
    const idsString = ids.reduce((str, id, i, arr) => {
      i === arr.length - 1
        ? str += id
        : str += `${id},`;
      return str;
    }, '');    
    return miaSearch.get(`/ids/${idsString}`)
      .then(response => filterArtResponse(response))
      .catch(err => err);
  },
  getRandomArt(){
    return miaSearch.get('random/art?q=image:valid*')
      .then(response => filterArtResponse(response, true))
      .catch(err => err);
  }
}