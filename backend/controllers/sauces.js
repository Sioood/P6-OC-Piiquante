const Sauces = require("../models/sauces");

// get all sauces

exports.getSauces = (req, res, next) => {
  Sauces.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

// get one sauce

exports.getOneSauce = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

// Create sauce

exports.createSauce = (req, res, next) => {
  const sauce = new Sauces({
    userId: req.body.userId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    mainPepper: req.body.mainPepper,
    imageUrl: req.body.imageUrl,
    heat: req.body.heat,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    userLiked: req.body.userLiked,
    userDisliked: req.body.userDisliked
  });
  sauce
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.updateSauce = (req, res, next) => {
  Sauces.updateOne({_id: req.params.id}, { ...req.body, _id: req.params.id})
  .then(() => res.status(200).json({ message: "Objet modifié"}))
  .catch(error => res.status(400).json({ error}));
};

exports.deleteSauce = (req, res, next) => {
  Sauces.deleteOne({_id: req.params.id})
  .then(() => res.status(200).json({ message: "Objet supprimé"}))
  .catch(error => res.status(400).json({ error}));
};