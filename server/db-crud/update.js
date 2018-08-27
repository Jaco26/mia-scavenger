const pool = require('../modules/pool');

module.exports = {

  user({ username, school, grade }) {
    if (!username || !school || !grade) throw new Error('You must provide an argument for "username", "school" AND "grade"');
    return pool.query(`SELECT * FROM users WHERE username = $1;`, [username])
      .then(response => {
        if (response.rows[0]) {
          return 'That username already exists!';
        } else {
          const sqlText = `UPDATE users SET username = $1, school = $2, grade = $3;`
          return pool.query(sqlText, [username, school, grade])
            .then(response => 200)
            .catch(err => err);
        }
      })
      .catch(err => err);
  },

  userPlaylist({ playlist_name, cover_art_id, playlist_id }) {
    const sqlText = `UPDATE playlists SET playlist_name = $1, cover_art_id = $2 WHERE id = $3;`;
    return pool.query(sqlText, [playlist_name, cover_art_id, playlist_id])
      .then(response => 200)
      .catch(err => err);
  },

  userPlaylistArt({ playlist_id, art_ids }) {
    const sqlText = `UPDATE playlists SET art_ids = $1 WHERE id = playlist_id = $2;`;
    return pool.query(sqlText, [playlist_id, art_ids])
      .then(response => 200)
      .catch(err => err);
  },
}