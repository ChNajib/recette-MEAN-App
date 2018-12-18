const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const IngrediantSchema = mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  cals: {
    type: Number,
    required: true
  },//Many-to-many relationship with Recipe model
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe"
  }]

});

const Ingrediant = module.exports = mongoose.model('Ingrediant', IngrediantSchema);

