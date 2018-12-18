const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Recipie = require('../models/recipe');

// Create recipe
router.post('/create/:ObjectId', Recipie.addRecipe);
router.get('/:id/detail', Recipie.recipe_details);
router.get('/all',(req, res) =>{
    Recipie.find((err, docs) => {
        console.log(docs);
        if (!err) { res.send(docs); }
    })
  });
//router.get('/:id', Recipie.);
router.put('/:id/update', Recipie.recipe_update);
router.delete('/:id/delete', Recipie.recipe_delete);


module.exports = router;
