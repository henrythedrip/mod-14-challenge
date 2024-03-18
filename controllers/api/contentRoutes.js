const router = require('express').Router();
const { User, Comment, Post } = require('../../models');

// prepended by /api
router.get('/posts', async function (req, res) {
  const allPosts = await Post.findAll()
  res.json(allPosts);
});

router.get('/comments', async function (req, res) {
    const allComments = await Comment.findAll()
    res.json(allComments);
});

router.get('/users', async function (req, res) {
    const allUsers = await User.findAll()
    res.json(allUsers);
});

module.exports = router