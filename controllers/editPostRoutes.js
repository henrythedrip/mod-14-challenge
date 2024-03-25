const router = require('express').Router();
const { User, Comment, Post } = require('../models');

// prepended with /editpost
router.get('/:id', (req, res) => {
    Post.findByPk(req.params.id)
      .then(async (post, err) => {
        if (err) {
            console.log(err);
            res.render('homepage');
        }

        const postData = post.get({ plain: true })
        res.render('editPost', {
            post: postData,
            logged_in: req.session.logged_in
        })
      })
});


module.exports = router