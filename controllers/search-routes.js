const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Thumb } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM thumb WHERE post.id = thumb.post_id AND thumb.thumbs_up = true)'), 'thumbsUp_count'],
        [sequelize.literal('(SELECT COUNT(*) FROM thumb WHERE post.id = thumb.post_id AND thumb.thumbs_up = false)'), 'thumbsDown_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
        res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// get all posts from search
router.get('/:title', (req, res) => {
    let searchValue = req.params.title;
    console.log(searchValue);
    console.log('======================');
    Post.findAll({
        where: {
            // title: 'Why MVC is so important'
            // title: [sequelize.literal(`(SELECT * FROM post WHERE post.title LIKE '%${searchValue}%')`)],
            title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', '%' + searchValue + '%')
        },
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM thumb WHERE post.id = thumb.post_id AND thumb.thumbs_up = true)'), 'thumbsUp_count'],
            [sequelize.literal('(SELECT COUNT(*) FROM thumb WHERE post.id = thumb.post_id AND thumb.thumbs_up = false)'), 'thumbsDown_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('search', { posts });
      })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;