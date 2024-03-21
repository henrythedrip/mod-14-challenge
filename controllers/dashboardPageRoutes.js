const router = require('express').Router();
const { Post, User } = require('../models');

// TODO: If the user is not logged in then they should be redirected to the login page
router.get('/', async function (req, res) {
    if (req.session.logged_in) {
        const user = await User.findByPk(req.session.user_id);
        const getPosts =  await Post.findAll({where:{userId:user.id}});
        const posts = getPosts.map((post)=>post.get({plain: true}))

        // console.log(posts);

        res.render('dashboard', {posts: posts, logged_in: req.session.logged_in}); 
    }
    else {
        res.redirect('/login')
    }
})

module.exports = router