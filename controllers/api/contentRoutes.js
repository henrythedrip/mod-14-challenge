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

// TODO: This post is not able to have the user_id in insomina but i think that it should work when we apply it to the actual website, and the user is logged in
router.post('/posts', (req, res) => {
  const { post_title, content } = req.body;
  console.log(req.session);
  Post.create({
      post_title: post_title,
      content: content,
      userId: req.session.user_id,
  }).then(
      newPost => { res.status(201).json(newPost) }
  ).catch((err) => {
      console.log(err);
      res.status(400).json(err);
  })
});


// TODO: make sure this is working
router.post('/comments', (req, res) => {
  const { content, postId } = req.body;
  console.log(req.session.user_id)
  Comment.create({
      content: content,
      userId: req.session.user_id,
      postId: postId,
  }).then(
      newPost => { res.status(201).json(newPost) }
  ).catch((err) => {
      console.log(err);
      res.status(400).json(err);
  })
});

// TODO: adjust this so that it can delete individual posts
router.delete('/posts/:id', (req, res) => {
  Post.destroy({
      where: { id: req.params.id }
  })
      .then(num => {
          if (num == 1) {
              res.send({ message: "post deleted sucessfully!" });
          } else {
              res.send({ message: `cannot delete post with id=${req.params.id}. maybe post was not found` });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: `error deleting post with id=${req.params.id}`
          });
      });
});

router.delete('/comments/:id', (req, res) => {
  Comment.destroy({
      where: { id: req.params.id }
  })
      .then(num => {
          if (num == 1) {
              res.send({ message: "comment deleted sucessfully!" });
          } else {
              res.send({ message: `cannot delete comment with id=${req.params.id}. maybe comment was not found` });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: `error deleting comment with id=${req.params.id}`
          });
      });
});

module.exports = router