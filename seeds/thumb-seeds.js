const { Thumb } = require('../models');

const thumbdata = [
  {
    user_id: 9,
    post_id: 1,
    thumbs_up: true
  },
  {
    user_id: 3,
    post_id: 1,
    comment_id: 1,
    thumbs_up: true
  },
  {
    user_id: 8,
    post_id: 5,
    comment_id: 2,
    thumbs_up: true
  },
  {
    user_id: 4,
    post_id: 5,
    comment_id: 2,
    thumbs_up: false
  },
  {
    user_id: 7,
    post_id: 6,
    thumbs_up: true
  },
  {
    user_id: 6,
    post_id: 6,
    comment_id: 4,
    thumbs_up: true
  }
];

const seedThumbs = () => Thumb.bulkCreate(thumbdata);

module.exports = seedThumbs;