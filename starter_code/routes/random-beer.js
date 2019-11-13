const express = require("express");
const router = new express.Router();
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

router.get("/randomBeers", (req, res) => {
  punkAPI
    .getRandom()
    .then(beers => {
      res.render("randomBeer", beers[0]);
      console.log(apiRes);
    })
    .catch(apiErr => console.log(apiErr));
});

module.exports = router;
