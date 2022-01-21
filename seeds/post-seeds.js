const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    post_content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    user_id: 3
  },
  {
    title: 'Encapsulation - OOP basic principle',
    post_content: 'Encapsulation is the mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this',
    user_id: 1
  },
  {
    title: 'What is Polymorphism in OOP',
    post_content: 'It means one name many forms. It is further of two types — static and dynamic. Static polymorphism is achieved using method overloading and dynamic polymorphism using method overriding. It is closely related to inheritance. We can write a code that works on the superclass, and it will work with any subclass type as well.',
    user_id: 1
  },
  {
    title: 'What is Sequelize in Node.js',
    post_content: 'Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) library for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. Its features are solid transaction support, relations, eager and lazy loading, read replication and many more.',
    user_id: 10
  },
  {
    title: 'What is the difference between Datatype TEXT vs STRING',
    post_content: 'STRING length default is 255 while TEXT can handle up to 4GB of characters (some say unlimited)',
    user_id: 7
  }
  ,
  {
    title: '11 Most In-Demand Programming Languages in 2022',
    post_content: `https://bootcamp.berkeley.edu/blog/most-in-demand-programming-languages/ 
                1. JavaScript
                2. Python
                3. HTML
                4. CSS
                5. Java
                6. SQL
                7. NoSQL
                8. C#
                9. Rust
                10. Perl
                11. Go`,
    user_id: 10
  },
  {
    title: 'What is a BLOB',
    post_content: 'BLOBs are an alternative type of data storage that share matching naming and capacity mechanisms with TEXT objects. However, BLOBs are binary strings with no character set sorting, so they are treated as numeric values while TEXT objects are treated as character strings. This differentiation is important for sorting information. BLOBs are used to store data files like images, videos, and executables. (Reference: https://chartio.com/resources/tutorials/understanding-strorage-sizes-for-mysql-text-data-types/)',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;