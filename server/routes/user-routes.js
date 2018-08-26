const router = require('express').Router();
const { Create, Read, Update, Delete } = require('../db-crud');

router.post('/', async (req, res) => {
  try {
    const result = await Create.user(req.body);
    result === 200
      ? res.sendStatus(200)
      : res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
});

router.post('/art', async (req, res) => {
  try {
    const result = await Create.userArt(req.body);
    result === 200
      ? res.sendStatus(200)
      : res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
});

router.post('/playlist', async (req, res) => {
  try {
    const result = await Create.userPlaylist(req.body);
    result === 200
      ? res.sendStatus(200)
      : res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.error(err)
  }
});

router.patch('/playlist/art', async (req, res) => {
  try {
    await Update.userPlaylistArt(req.body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
});




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

