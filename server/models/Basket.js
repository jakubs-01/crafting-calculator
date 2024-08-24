// Basket.js (Mongoose example)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    item: {
      type: Schema.Types.ObjectId,
      ref: 'Item',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  totalCost: {
    type: Number,
    required: true,
    default: 0
  },
  totalWeight: {
    type: Number,
    required: true,
    default: 0
  },
  totalCraftTime: {
    type: Number,
    required: true,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

BasketSchema.pre('save', function(next) {
  // Logic to calculate totalCost, totalWeight, and totalCraftTime based on items and quantities
  next();
});

module.exports = mongoose.model('Basket', BasketSchema);