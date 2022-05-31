const sequelize = require('../config/connection');
const { User, Trips } = require('../models');
const faker = require('faker');

const userData = []
for (let index = 0; index < 10; index++) {
  userData.push({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: 'password',
  });
  
}

const tripsData = []
for (let index = 0; index < 10; index++) {
  tripsData.push({
    name: faker.random.word(),
    departure_airport: 'DEN',
    arrival_airport: 'SFO',
    departure_date: faker.date.future(),
    carbon_footprint: faker.random.number(),
  });
  
}

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const trip of tripsData) {
    await Trips.create({
      ...trip,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
