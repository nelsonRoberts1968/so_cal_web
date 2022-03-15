const faker = require('faker');

const db = require('./connection');
const { Event, User } = require('../models');

db.once('open', async () => {
  await Event.deleteMany({});
  await User.deleteMany();

  // create user data
  const userData = [];

  for (let i = 0; i<50; i += 1){
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ firstName, lastName, username, email, password});
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create events
  let createdEvents = [];
  for (let i = 0; i < 50; i += 1) {
    const eventName = faker.lorem.words(Math.round(Math.random() * 10) + 1);
    const eventText = faker.lorem.words(Math.round(Math.random() * 30) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdEvent = await Event.create({ eventName, eventText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { events: createdEvent._id } }
    );

    createdEvents.push(createdEvent);
  }  

  console.log('users/events seeded');

  process.exit(0);
});