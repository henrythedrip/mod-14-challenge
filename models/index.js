// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


Post.belongsTo(User);

Post.hasMany(Comment);

User.hasMany(Post);

User.hasMany(Comment);

Comment.belongsTo(User);

Comment.belongsTo(Post);

module.exports = {
    User,
    Comment,
    Post
};

