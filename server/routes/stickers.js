
const express = require('express');
const router = express.Router();
const Sticker = require('../models/Sticker');
const Project = require('../models/Project');

// Add sticker to a project
router.post('/:projectId', async (req, res) => {
  const { projectId } = req.params;
  const { partName, dxfUrl, imageUrl, widthPreset } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ error: "Project not found" });
    const sticker = new Sticker({ projectId, partName, dxfUrl, imageUrl, widthPreset });
    await sticker.save();
    res.json(sticker);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a sticker
router.delete('/:id', async (req, res) => {
  try {
    const stickerId = req.params.id;
    await Sticker.findByIdAndDelete(stickerId);
    res.json({ message: "Sticker deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
