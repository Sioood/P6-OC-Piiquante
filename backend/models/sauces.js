const mongoose = require('mongoose');

const modelsSauce = mongoose.Schema({
  userId: { type: String, req: true },
  name: { type: String, req: true },
  manufacturer: { type: String, req: true },
  description: { type: String, req: true },
  imageUrl: { type: String, req: false },
  mainPepper: { type: String, req: true },
  heat: { type: Number, req: true },
  likes: { type: Number, req: true, default: 0 },
  dislikes: { type: Number, req: true, default: 0 },
  usersLiked: { type: [String], req: true, default: [] },
  usersDisliked: { type: [String], req: true, default: [] },
});

module.exports = mongoose.model('Sauces', modelsSauce);