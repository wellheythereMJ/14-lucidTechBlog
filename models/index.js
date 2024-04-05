const User = require('./User');
const BlogPost = require('./blogpost');
const Comments = require('./comments');


User.hasMany(BlogPost, {
  foreignKey: 'user_id'
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Comments, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

BlogPost.hasMany(Comments, {
  foreignKey: 'blog_post_id'
})

Comments.belongsTo(BlogPost, {
  foreignKey: 'blog_post_id',
  onDelete: 'CASCADE',
});
module.exports = { User, BlogPost, Comments };
