const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const logoutRoutes = require('./logoutRoutes');
const signupRoutes = require('./signupRoutes');
const contentRoutes = require('./contentRoutes');

// these are all prepended with `/api`
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);
router.use('/signup', signupRoutes);
router.use(contentRoutes);

module.exports = router;