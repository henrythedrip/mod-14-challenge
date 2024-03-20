const router = require('express').Router();
const User = require('../../models/User');

// router.post('/', function (req, res) {
//     res.json({
//         message: 'api/signupRoutes.js is not implamented yet.'
//     });
// });


// prepend with /api/signup
router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    User.create({
        username: username,
        email: email,
        password: password
    }).then(newUser => {

        // save session here and send to dashboard or some shit
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            res.redirect('/dashboard')
            // res.json({ user: userData, message: 'You are now logged in!' });
        })
        // newUser => { res.status(201).json(newUser) }
    }
    ).catch((err) => {
        console.log(err);
        res.status(400).json(err);
    })
});

module.exports = router