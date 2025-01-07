const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getPostsbyUser, createPost } = require('../models/postsModel');


const router = express.Router();

router.post('./createPost', async (req, res) => {
    const { user_id, content } = req.body;

    if (!user_id || !content){
        return res.status(401).json({error: 'user_id and content are required'});
    }

       try {
    const [newPostId] = await knex('posts').insert({ user_id, content });
    res.status(201).json({ message: 'Post created', post_id: newPostId });
  } catch (error) {
    res.status(500).json({ error: 'Error creating post', details: error.message });
  }
});


// Retrieve all posts or posts for a specific user
router.get('/', async (req, res) => {
  const { user_id } = req.query;

  try {
    let posts;
    if (user_id) {
      posts = await knex('posts').where({ user_id });
    } else {
      posts = await knex('posts').select('*');
    }
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving posts', details: error.message });
  }
});

// Update an existing post
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required to update the post' });
  }

  try {
    const updatedRows = await knex('posts').where({ id }).update({ content });

    if (!updatedRows) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating post', details: error.message });
  }
});

// Delete a post
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await knex('posts').where({ id }).del();

    if (!deletedRows) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post', details: error.message });
  }
});

module.exports = router;