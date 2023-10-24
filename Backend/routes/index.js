const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:user@cluster0.6sr4x.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const upload = require('./upload');  
const cors = require('cors');

var router = express.Router();

const News = require('./newsModel');
router.use(cors()); 
const NewsSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  imageUrl: String,
  author: String,
  content: String
});


router.get('/', (req, res) => {
  res.send('hello world')
})
router.use('/uploads', express.static('uploads'));

router.post('/', upload.single('image'), async (req, res) => {
  const news = new News({
      id: Math.floor(Math.random() * (99999 - 9999 + 1) + 9999),
      title: req.body.title,
      author: req.body.author,
      content: req.body.content,
      description: req.body.description,
      imageUrl: req.file.filename // add this line to save the image filename


  });

  try {
      const savedNews = await news.save();
      res.json(savedNews);
      
  } catch (err) {
      res.status(400).send(err);
  }
});


















router.get('/news/:id', async (req, res) => {
  try {
      const article = await News.findOne({ id: req.params.id });
      if (article) {
          res.json(article);
      } else {
          res.status(404).json({ message: 'Article not found' });
      }
  } catch (error) {
      console.error("Error fetching article:", error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/news/:id', upload.single('image'), async (req, res) => {
  try {
      const updateObj = { ...req.body };

      // If an image file is uploaded, add it to the update object
      if (req.file) {
          updateObj.imageUrl = req.file.filename;
      }

      const updatedNews = await News.findOneAndUpdate({ id: req.params.id }, updateObj, { new: true });
      res.json(updatedNews);
  } catch(err) {
      res.status(400).send(err);
  }
});
router.delete('/news/:id', async (req, res) => {
    try {
        const deletedNews = await News.findOneAndDelete({ id: req.params.id });
        res.json(deletedNews);
    } catch(err) {
        res.status(400).send(err);
    }
});


router.post('/admin/login', (req, res) => {
  const { email, password } = req.body;

  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "admin";

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      res.json({ success: true, message: 'Login successful' });
  } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});





router.get('/news', (req, res) => {
  News.find({})
    .then(articles => {
      res.json(articles);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to fetch news articles." });
    });
});
module.exports = router;