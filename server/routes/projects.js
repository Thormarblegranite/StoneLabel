const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Sticker = require('../models/Sticker');

router.post('/', async (req, res) => {
  const { logo, customerName, jobName, address } = req.body;
  try {
    const project = new Project({ logo, customerName, jobName, address });
    await project.save();
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });

    const stickers = await Sticker.find({ projectId: project._id });
    res.json({ project, stickers });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;