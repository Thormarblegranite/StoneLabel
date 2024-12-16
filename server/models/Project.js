const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  logo: { type: String, default: "" },
  customerName: { type: String, required: true },
  jobName: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);