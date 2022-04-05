const express = require("express");
const router = express.Router();

const sauces = require('../models/sauces');

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  userLiked: { type: String, required: true },
  userDisliked: { type: String, required: true },
});

module.exports = mongoose.model("sauces", sauceSchema);

// all sauces

router.get("/", (req, res, next) => {
  sauces.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({ error }));
  next();
});

// one sauce

router.get(':id', (req, res, next) => {
  sauces.findOne({ _id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
});

router.post('/', (req, res, next) => {
  delete req.body._id;
  const sauce = new sauces({
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router;