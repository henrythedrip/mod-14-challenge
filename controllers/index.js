const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');
const apiRouter = require('./api');
const signupRoutes = require('./signupPageRoutes');
const dashboardRoutes = require('./dashboardPageRoutes');
// const loginRoutes = require('./loginRoutes');
// const logoutRoutes = require('./logoutRoutes');

router.use('/api', apiRouter);
router.use('/', homepageRoutes);
router.use('/signup', signupRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/login', loginRoutes);
// router.use('/logout', logoutRoutes);

// 404 route because its not anything that we have already defined
router.get('*', (req, res) => {
  res.status(404).send('<h1>404</h1>')
})

module.exports = router;