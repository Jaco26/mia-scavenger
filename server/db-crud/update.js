const pool = require('../modules/pool');

module.exports = {
  
  userPlaylistArt({ playlistId, artIds }) {
    const sqlText = `UPDATE playlists SET art_ids = $1 WHERE id = playlist_id = $2;`;
    return pool.query(sqlText, [playlistId, artIds])
      .then(response => 200)
      .catch(err => err);
  }
}