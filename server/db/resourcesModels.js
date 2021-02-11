const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourcesSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  tags: { type: [String], required: false },
})

module.exports = mongoose.model('Resource', resourcesSchema);