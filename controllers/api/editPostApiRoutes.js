const router = require('express').Router();
const Post = require('../../models/Post');

router.put('/:id', function (req, res) {
    // const post = Post.findByPk(req.params.id);
    
    Post.update(
      {
        post_title: req.body.title,
        content: req.body.content
      },
      {
        where: {id: req.params.id}
      },
    )
    .then(post => {
      console.log(post);
      res.json(post)
    })
    .catch(err => {
      res.status(err.status).end();
    })
      
      
    // res.json(post);
});

module.exports = router