const { Post, User, Comment } = require('../models');

const router = require('express').Router();


router.get("/", async (req, res)=>{
  try{
    let getPosts =  await Post.findAll();
    let posts = getPosts.map((post)=>post.get({plain: true}))

    // console.log(posts);

    res.render('homepage',{ posts, logged_in: req.session.logged_in })

  }catch (err){
    console.log(err);
    res.status(500).json(err)
  }
})

// renders login page (still here because im lazy)
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


// TODO: Move this to the api/content routes when youre not lazy
router.get('/posts/:id', async (req, res) => {
  // get post data based on id in req params
  let postData = await Post.findByPk(req.params.id);
  const post = postData.get({ plain: true });
  // console.log(post);

  // then, get post author from database based on the userId field in the post data  
  let userData = await User.findByPk(post.userId, {
    attributes: { exclude: ['password'] }
  });
  const user = userData.get({ plain: true });

  post.username = user.username;
  // console.log(user);


  // finally, find all comments that belong to the id of this post
  // https://stackoverflow.com/questions/46380563/get-only-datavalues-from-sequelize-orm
  // we need to add raw: true to our query options to get only the data values and not the query bs
  let commentData = await Comment.findAll({
    where: { postId:post.id },
    include: {
      model: User,
      as: User.username,

      attributes: {
        exclude: ['password'],
      },
    },
    raw: true});

  // console.log(commentData);

  // console.log('comment data', commentData);

  // first we get the comment data as an array of comments
  // then we want to insert the username of each commenter into that comment object
  // then we want to render the page with the comment data


  commentData.map(comment => {
    // console.log(comment);
    const user = User.findByPk(comment.userId, {
      attributes: { exclude:['password'] } 
    }).then((result, err) => {
      if (err) {
        console.log(err);
        res.render('homepage');
      }
      // console.log('this should be result', result);
      const username = result.get({ plain: true }).username;
      commentData[commentData.indexOf(comment)].username = username;
    

    })
  })      

  console.log(commentData);
  
  res.render('singlePost', {
        post: post,
        comments: commentData,
        logged_in: req.session.logged_in
      });
})

module.exports = router;