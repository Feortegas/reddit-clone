const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'MVC is a champion',
    user_id: 6,
    post_id: 1
  },
  {
    comment_content: 'Definitely important in development',
    user_id: 7,
    post_id: 1,
    comment_id: 1
  },
  {
    comment_content: 'It is a good practice to a STRING unless there is a slight possibility to go over 200 then use TEXT',
    user_id: 10,
    post_id: 5
  },
  {
    comment_content: 'Is the size of the memory and storage still matters today?',
    user_id: 2,
    post_id: 5
  },
  {
    comment_content: 'I wonder same thing as the prices of memory and storage are way cheaper',
    user_id: 8,
    post_id: 5,
    comment_id: 4
  },
  {
    comment_content: 'I agree 100%',
    user_id: 4,
    post_id: 5,
    comment_id: 5
  },
  {
    comment_content: 'Nice! JavaScript is a king in my bootcamp class.',
    user_id: 3,
    post_id: 6
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;