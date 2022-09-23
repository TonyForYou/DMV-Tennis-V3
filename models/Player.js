const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  prefCourt: {
    type: String,
    required: true,
  },
  prefTime: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Player", PlayerSchema);