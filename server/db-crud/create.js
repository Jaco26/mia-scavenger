const pool = require('../modules/pool');

module.exports = {
  
  user({ username, password, school, grade }) {
    return pool.query(`SELECT * FROM users WHERE username == $1;`, [username])
      .then(response => {
        if (response.rows[0]) { // username exists
          return 'That username already exists!';
        } else {
          const sqlText = `INSERT INTO users (username, password, school, grade)
            VALUES ($1, $2, $3, $4);`;
          return pool.query(sqlText, [username, password, school, grade])
            .then(response => 200)
            .catch(err => err);
        }
      })
      .catch(err => err);
  },

  userArt({ user_id, miapi_id }) {
    return pool.query(`SELECT * FROM art WHERE user_id = $1 AND miapi_id = $2`, [user_id, miapi_id])
      .then(response => {
        if (response.rows[0]) { // already saved this art
          console.log('YOU ALREADY SAVED THIS ART');
          
          return 'You have already saved this art!';
        } else {
          console.log('INSERTING ART****************');
          
          const sqlText = `INSERT INTO art (user_id, miapi_id)
            VALUES ($1, $2);`;
          return pool.query(sqlText, [user_id, miapi_id])
            .then(response => 200)
            .catch(err => err);
        }
      })
      .catch(err => err);
  },

  userPlaylist({ playlist_name, user_id, miapi_id }) {
    return pool.query(`SELECT * FROM playlists WHERE user_id = $1 AND playlist_name = $2`, [user_id, playlist_name])
      .then(response => {
        if (response.rows[0]) { // playlist by this name already exists for user
          return `You already have a playlist called "${playlist_name}"!`;
        } else {
          const sqlText = `INSERT INTO playlists (playlist_name, user_id, cover_art_id)
            VALUES ($1, $2, $3);`;
          console.log('else statement', playlist_name, user_id, miapi_id);
          return pool.query(sqlText, [playlist_name, user_id, miapi_id])
            .then(response => 200)
            .catch(err => err);
        }
      })
      .catch(err => err);
  },

};
