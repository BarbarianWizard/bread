// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/bakers.js')
const bakerSeedData = require('../models/baker_seed')

// Route
baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})




// export
module.exports = baker                    
