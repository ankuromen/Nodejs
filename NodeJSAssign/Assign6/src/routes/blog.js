const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog', async (req, res) => {
    const { page, search } = req.query;
    const perPage = 5;
    const skip = (page - 1) * perPage;
  
    try {
      let query = {};
      if (search) {
        query = { topic: { $regex: search, $options: 'i' } };
      }
  
      const blogs = await Blog.find(query)
        .skip(skip)
        .limit(perPage);
  
      res.json({ status: 'success', result: blogs });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  });
  
  router.post('/blog', async (req, res) => {
    try {
      const { topic, description, posted_at, posted_by } = req.body;
      const blog = new Blog({ topic, description, posted_at, posted_by });
      const savedBlog = await blog.save();
  
      res.json({ status: 'success', result: savedBlog });
    } catch (err) {
      console.error(err);
      res.status(400).json({ status: 'error', message: 'Invalid request body' });
    }
  });
  
  router.put('/blog/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { topic, description, posted_at, posted_by } = req.body;
  
      const updatedBlog = await Blog.findByIdAndUpdate(id, { topic, description, posted_at, posted_by }, { new: true });
  
      if (!updatedBlog) {
        return res.status(404).json({ status: 'error', message: 'Blog not found' });
      }
  
      res.json({ status: 'success', result: updatedBlog });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  });
  
  router.delete('/blog/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedBlog = await Blog.findByIdAndDelete(id);
  
      if (!deletedBlog) {
        return res.status(404).json({ status: 'error', message: 'Blog not found' });
      }
  
      res.json({ status: 'success', result: deletedBlog });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  });


module.exports = router;