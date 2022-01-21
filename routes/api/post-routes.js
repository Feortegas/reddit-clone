const router = require('express').Router();
const { Post, User, Thumb } = require('../../models');
const { sequelize } = require('../../models/User');

// GET all Posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_content'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;