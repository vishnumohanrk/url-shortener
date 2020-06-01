const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    original: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model('url', urlSchema);

module.exports = Url;
