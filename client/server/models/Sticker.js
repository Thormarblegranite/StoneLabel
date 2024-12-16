const mongoose = require('mongoose');

const StickerSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  partName: { type: String, required: true },
  dxfUrl: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  widthPreset: { type: String, enum: ["4x6", "4x4", "4x8", "4x1", "4x0.75"], default: "4x6" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sticker', StickerSchema);