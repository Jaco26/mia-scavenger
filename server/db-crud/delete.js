const pool = require('../modules/pool');

module.exports = {

  user({ userId }) {
    return pool.query(`DELETE FROM users WHERE id = $1;`, [userId])
      .then(response => 200)
      .catch(err => err);
  },

  userArt({ userId, artId }) {
    console.log('DELETING ART userId, artId', userId, artId);
    
    return pool.query(`DELETE FROM art WHERE user_id = $1 AND id = $2;`, [userId, artId])
      .then(response => 200)
      .catch(err => err);
  },

  userPlaylist({ playlistId }) {
    return pool.query(`DELETE FROM playlists WHERE id = $1;`, [playlistId])
      .then(response => 200)
      .catch(err => err);
  },

};