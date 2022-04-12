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
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauces({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  sauce
    .save()
    .then(() => {
      res.status(201).json({
        message: req.body.sauce,
        message: console.log(req.body),
        message: console.log(req.body.sauce),
        message: "sauce créee"
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
        message: req.body.sauce,
        message: console.log(req.body),
        message: console.log(req.body.sauce),
        message: "sauce non créee"
      });
    });
};

exports.updateSauce = (req, res, next) => {
  Sauces.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié" }))
    .catch((error) => res.status(403).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id }).then((sauce) => {
    if (!sauce) {
      res.status(404).json({
        error: new Error("No such Sauces!"),
      });
    }
    if (sauce.userId !== req.auth.userId) {
      res.status(400).json({
        error: new Error("Unauthorized request!"),
      });
    }
    Sauces.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Item Deleted !" }))
      .catch((error) => res.status(400).json({ error }));
  });
};
