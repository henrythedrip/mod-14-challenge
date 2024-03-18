const router = require('express').Router();

// TODO: Remove this shit because its not gonna work
router.get('/', function (req, res) {
    console.log("MF tried to logout");
    res.json({
        message: 'This is not implamented yet. Please wait for me to get on my shit.'
    });
});


// .post logout
router.post('/', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


module.exports = router