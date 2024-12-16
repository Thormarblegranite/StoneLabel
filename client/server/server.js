const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const keys = require('./config/keys');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/projects', require('./routes/projects'));
app.use('/api/stickers', require('./routes/stickers'));
app.use('/api/upload', require('./routes/upload'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(keys.port, () => {
  console.log(`Server running on port ${keys.port}`);
});