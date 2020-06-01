const express = require('express');
const shortID = require('shortid');
const Url = require('../models/url');

const router = express.Router();

router.post('/new', async (req, res) => {
  const shortened = await new Url({
    original: req.body.original,
    short: shortID.generate(),
  }).save();

  res.json({ short: shortened.short });
});

router.get('/:id', async (req, res) => {
  const doc = await Url.findOne({ short: req.params.id });

  if (doc) {
    await doc.updateOne({ clicks: doc.clicks + 1 });
    return res.redirect(doc.original);
  }

  res.json({ error: 'Not Found' });
});

module.exports = router;
