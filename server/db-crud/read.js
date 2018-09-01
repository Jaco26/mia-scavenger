const pool = require('../modules/pool');
const miapi = require('../modules/miapi');

module.exports = {

  user({ username, password }) {
    return pool.query(`SELECT * FROM users WHERE username = $1 AND password = $2;`, [username, password])
      .then(response => response.rows)
      .catch(err => err);
  },

  userArt({ userId }) {    
    return pool.query(`SELECT * FROM art WHERE user_id = $1;`, [userId])
      .then(async response => {  
        if (response.rowCount > 0) {
          const artIds = response.rows.map(row => row.miapi_id);
          const miapiResults = await miapi.getArtByIds(artIds);
          return miapiResults.reduce((accum, result) => {
            accum.push({
              miaResults: result,
              dbResults: response.rows.filter(row => row.miapi_id == result.id)[0]
            });
            return accum;
          }, []);
        }      
      })
      .catch(err => {
        throw new Error(err)
      });
  },

  userPlaylists({ userId }) {
    return pool.query(`SELECT * FROM playlists WHERE user_id = $1;`, [userId])
      .then(response => response.rows)
      .catch(err => {
        throw new Error(err)
      });
  },

  userPlaylistArt({ artIds }) {
    try {
      return miapi.getArtByIds(artIds);
    } catch (err) {
      throw new Error(err);
    }
  },

};