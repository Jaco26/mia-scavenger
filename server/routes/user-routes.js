const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/new-user', (req, res) => {
  const { username, password, school, grade } = req.body;

  const sqlText = `INSERT INTO users (username, password, school, grade)
    VALUES ($1, $2, $3, $4);`;

  pool.query(sqlText, [username, password, school, grade])
    .then(() => res.sendStatus(201))
    .catch(err => {
      res.sendStatus(500);
      console.log(err);
    });
});

router.post('/new-playist', (req, res) => {

  const sqlText = `INSERT INTO playlists ()`
})

router.get('/:userId', (req, res) => {
  const sqlText = `SELECT * FROM users WHERE id = $1;`;
  pool.query(sqlText, [req.params.userId])
    .then(response => res.send(response.rows))
    .catch(err => {
      res.sendStatus(500);
      console.log(err);
    });
});

router.get('/:playlistId')

