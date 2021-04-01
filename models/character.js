const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    element: {
      type: String
    },
    is_deleted: {
      type: Boolean,
      default: false
    }
  },
  {
    // Enable timestamps
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  }
);

module.exports = mongoose.model("character", CharacterSchema, "character"); // Export model
