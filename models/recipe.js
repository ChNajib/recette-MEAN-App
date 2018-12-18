const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const User = require('../models/user')
// User Schema
const RecipeSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  directions: {
    type: String,
    required:true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  //Many-to-many relationship with Ingrediant model
  ingrediants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ingrediant"
  }]
  
});

const Recipe = module.exports = mongoose.model('Recipe', RecipeSchema);
//const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addRecipe = function (req, res) {
  //console.log(":"+req.params.ObjectId)

  let rec = new Recipe(
      {
          name: req.body.name,
          description: req.body.description,
          directions: req.body.directions,
          owner: req.params.ObjectId
      }
  );
  
 /* User = req.user;
  User.recipe.push(rec) ;*/

  rec.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Recipe Created successfully')
  })
 
};

module.exports.recipe_details = function (req, res) {
  Recipe.findById(req.params.id, function (err, recipe) {
      if (err) return next(err);
      res.send(recipe);
  })
};


module.exports.recipe_update = function (req, res) {
  Recipe.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, recipe) {
      if (err) return next(err);
      res.send('Recipe udpated.');
  });
};

module.exports.recipe_delete = function (req, res) {
  Recipe.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};
