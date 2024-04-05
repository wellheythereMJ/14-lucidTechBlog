const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./BlogPostRoutes');
const commentRoutes = require('./CommentRoutes');

router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
