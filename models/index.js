const User = require('./User');
const Trips = require('./Trips');
// const faker = require('faker');

User.hasMany(Trips, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Trips.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Trips };
