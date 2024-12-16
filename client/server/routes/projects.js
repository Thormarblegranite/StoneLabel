
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Sticker = require('../models/Sticker');

// Create a new project
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

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get single project with stickers
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

// Delete a project and its associated stickers
router.delete('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    await Sticker.deleteMany({ projectId });
    await Project.findByIdAndDelete(projectId);
    res.json({ message: "Project and associated stickers deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
