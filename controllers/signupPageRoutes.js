const router = require('express').Router();

// prepended with /signup
router.get('/', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
    }
    res.render('signup');
  });

  module.exports = router