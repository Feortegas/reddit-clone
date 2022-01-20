const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    post_text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    user_id: 3
  },
  {
    title: 'Encapsulation - OOP basic principle',
    post_text: 'Encapsulation is the mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this',
    user_id: 1
  },
  {
    title: 'What is Polymorphism in OOP',
    post_text: 'It means one name many forms. It is further of two types — static and dynamic. Static polymorphism is achieved using method overloading and dynamic polymorphism using method overriding. It is closely related to inheritance. We can write a code that works on the superclass, and it will work with any subclass type as well.',
    user_id: 1
  },
  {
    title: 'What is Sequelize in Node.js',
    post_text: 'Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) library for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. Its features are solid transaction support, relations, eager and lazy loading, read replication and many more.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;