const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  image: {
    url: String,
    public_id: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
