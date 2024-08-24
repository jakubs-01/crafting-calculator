// Item.js (Mongoose example)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  baseCraftTime: {
    type: Number
  },
  ingredients: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item'
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  skills: {
    crafting: Number,
    woodWorking: Number,
    firearms: Number
  },
  genes: {
    intelligence: Number,
    strength: Number,
    dexterity: Number,
    perception: Number
  },
  requiresWorkbench: {
    type: Boolean,
    default: false
  },
  shops: [{
    type: String
  }]
});

module.exports = mongoose.model('Item', ItemSchema);