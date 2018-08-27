const router = require('express').Router();
const miapi = require('../modules/miapi');

router.get('/:query', async (req, res) => {
  try {
    const miapiResults = await miapi.searchForArt(req.params.query)
    const result = miapiResults.reduce((accum, item) => {
      accum.push({
        miaResults: item,
        dbResults: null,
      });
      return accum;
    }, []);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    console.log('LINE 17 ********* search-routes' , err);
  }
});

module.exports = router;