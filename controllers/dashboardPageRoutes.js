const router = require('express').Router();


// TODO: If the user is not logged in then they should be redirected to the login page
router.get('/', function (req, res) {
    if (req.session.logged_in) {
    res.render('dashboard', {logged_in: req.session.logged_in}); 
    }
    else {
    res.redirect('/login')
    }
})

module.exports = router