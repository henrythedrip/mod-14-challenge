// const router = require('express').Router();
// // const apiRoutes = require('./api');

// // router.use('/api', apiRoutes);

// router.get('/', (req, res) => {
//   res.send("<h1>Hello From HomepageRoutes</h1>")
// });

// module.exports = router;

const router = require('express').Router();

// route to render the homepage handlebar view.
router.get('/', async (req, res) => {
  console.log(req.session);
  // const logged_in = req.session.logged_in;
  res.render('homepage');
});

// renders login page (still here because im lazy)
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;