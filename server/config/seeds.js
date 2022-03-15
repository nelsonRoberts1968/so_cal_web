const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {

  await User.deleteMany();

  await User.create({
    firstName: 'test',
    lastName: 'test',
    username: "test1234",
    email: 'test@testmail.com',
    password: 'password12345'
  });

  await User.create({
    firstName: 'test2',
    lastName: 'test2',
    username: "test12345",
    email: 'test2@testmail.com',
    password: 'password12345'
  });

  

  console.log('users seeded');

  process.exit();
});