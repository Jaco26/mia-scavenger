const router = require('express').Router();
const miapi = require('../modules/miapi');

router.get('/random', async (req, res) => {
  try {
    
    const miapiResults = await miapi.getRandomArt();
    console.log("Random route is hit", miapiResults);
    res.send(miapiResults);
  } catch (err) {
    res.sendStatus(500);
    console.log('LINE 17 ********* art-random' , err);
  }
});

module.exports = router;