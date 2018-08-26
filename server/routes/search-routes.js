const router = require('express').Router();
const miapi = require('../modules/miapi');

router.get('/:query', async (req, res) => {
  try {
    const result = await miapi.searchForArt(req.params.query);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

module.exports = router;