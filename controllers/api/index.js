const userRoutes = require('./userRoutes')
const router = require('express').Router();
const postRoutes = require('./postRoutes');
router.use('/post', postRoutes);
router.use('/users', userRoutes);

module.exports = router;