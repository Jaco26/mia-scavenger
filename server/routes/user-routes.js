const router = require('express').Router();
const { Create, Read, Update, Delete } = require('../db-crud');


// CREATE CREATE CREATE

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



// READ READ READ

router.get('/art/:userId', async (req, res) => {  
  try {
    const result = await Read.userArt(req.params);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.get('/playlists/:userId', async (req, res) => {
  try {
    const result = await Read.userPlaylists(req.params);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.get('/playlist/:artIds', async (req, res) => {
  try {
    const result = await Read.userPlaylistArt(req.params);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.get('/:username/:password', async (req, res) => {  
  try {
    console.log(req.params);
    
    const result = await Read.user(req.params);
    console.log(result);
    
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});



// UPDATE UPDATE UPDATE

router.patch('/', async (req, res) => {
  try {
    await Update.user(req.body);
    res.sendStatus(200);
  } catch (err) {
     res.sendStatus(500);
     console.log(err);
  }
});

router.patch('/playlist', async (req, res) => {
  try {
    await Update.userPlaylist(req.body)
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.patch('/playlist/art', async (req, res) => {
  try {
    await Update.userPlaylistArt(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.error(err);
  }
});



// DELETE DELETE DELETE

router.delete('/art/:userId/:artId', async (req, res) => {
  try {
    await Delete.userArt(req.params);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.delete('/playlist/:playlistId', async (req, res) => {
  try {
    await Delete.userPlaylist(req.params);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    await Delete.user(req.params);
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = router;