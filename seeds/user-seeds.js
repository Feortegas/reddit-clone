const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'jvega',
    email: 'jaime.vega@live.com',
    password: 'password123'
  },
  {
    username: 'blim',
    email: 'bella.lim@invent.net',
    password: 'password123'
  },
  {
    username: 'abajo',
    email: 'amboy.bajo@yahoo.com',
    password: 'password123'
  },
  {
    username: 'ethomas',
    email: 'eden.thomas@jeepney.org',
    password: 'password123'
  },
  {
    username: 'tsawyer',
    email: 'tom.sawyer@msn.com',
    password: 'password123'
  },
  {
    username: 'dmenace',
    email: 'dennis.menace@eudoramail.com',
    password: 'password123'
  },
  {
    username: 'jwalker',
    email: 'johny.walker@gmail.com',
    password: 'password123'
  },
  {
    username: 'jdoe',
    email: 'jane.doe@freedom.org',
    password: 'password123'
  },
  {
    username: 'jdeery',
    email: 'jack.deery@tractor.com',
    password: 'password123'
  },
  {
    username: 'elasting',
    email: 'ever.lasting@forever.edu',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;